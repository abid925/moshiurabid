import JSZip from 'jszip';

// Project files bundled for foolproof direct client-side generation
export async function downloadProjectZip(onProgress?: (msg: string) => void) {
  try {
    if (onProgress) onProgress('Preparing files...');

    // 1. First attempt to fetch the static prebuilt zip
    try {
      const response = await fetch('/moshiur-portfolio.zip', { cache: 'no-store' });
      if (response.ok) {
        const blob = await response.blob();
        // Check if the blob is actually a valid ZIP (starts with PK header, not HTML text)
        const header = await blob.slice(0, 4).arrayBuffer();
        const headerBytes = new Uint8Array(header);
        const isZip = headerBytes[0] === 0x50 && headerBytes[1] === 0x4b; // 'PK' magic bytes

        if (isZip && blob.size > 50000) {
          triggerBrowserDownload(blob, 'moshiur-portfolio.zip');
          if (onProgress) onProgress('Downloaded successfully!');
          return;
        }
      }
    } catch (e) {
      console.warn('Static zip fetch fallback triggered', e);
    }

    // 2. Fallback: Dynamic in-browser generation with JSZip
    if (onProgress) onProgress('Packaging project with JSZip...');
    const zip = new JSZip();

    // Fetch and package project files dynamically
    const fileList = [
      'package.json',
      'tsconfig.json',
      'tsconfig.node.json',
      'vite.config.ts',
      'index.html',
      'metadata.json',
      'src/main.tsx',
      'src/App.tsx',
      'src/index.css',
      'src/types.ts',
      'src/components/Navbar.tsx',
      'src/components/Hero.tsx',
      'src/components/InteractiveBeforeAfter.tsx',
      'src/components/InteractiveShowcase.tsx',
      'src/components/BentoGrid.tsx',
      'src/components/InteractivePricingOrders.tsx',
      'src/components/MarketplaceHub.tsx',
      'src/components/LiveStudioClock.tsx',
      'src/components/InteractiveDock.tsx',
      'src/components/FloatingStudioControl.tsx',
      'src/components/HireModal.tsx',
      'src/components/Icons.tsx',
      'src/components/Footer.tsx'
    ];

    for (const filePath of fileList) {
      try {
        const res = await fetch(`/${filePath}?raw=true`);
        if (res.ok) {
          const content = await res.text();
          zip.file(filePath, content);
        }
      } catch (err) {
        console.warn(`Could not add ${filePath}`, err);
      }
    }

    // Add README.md
    zip.file(
      'README.md',
      `# Moshiur - Graphic Designer & Product Photographer Portfolio\n\n## Quick Start\n1. Run \`npm install\`\n2. Run \`npm run dev\`\n3. Open http://localhost:3000 in your browser\n\n## Stack\n- React 19\n- TypeScript\n- Tailwind CSS\n- Vite\n- Lucide Icons\n- Motion Animations`
    );

    const generatedBlob = await zip.generateAsync({ type: 'blob' });
    triggerBrowserDownload(generatedBlob, 'moshiur-portfolio.zip');
    if (onProgress) onProgress('Complete!');
  } catch (error) {
    console.error('Download error:', error);
    // Last resort direct link
    window.location.href = '/moshiur-portfolio.zip';
  }
}

function triggerBrowserDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 1000);
}
