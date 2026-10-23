import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));

const dataDir = path.join(__dirname, 'data');
const projectsFile = path.join(dataDir, 'projects.json');
const ordersFile = path.join(dataDir, 'orders.json');

// Ensure data folder and files exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function getProjects() {
  try {
    if (!fs.existsSync(projectsFile)) return [];
    return JSON.parse(fs.readFileSync(projectsFile, 'utf8'));
  } catch (err) {
    console.error('Error reading projects.json:', err);
    return [];
  }
}

function saveProjects(projects: any[]) {
  fs.writeFileSync(projectsFile, JSON.stringify(projects, null, 2), 'utf8');
}

function getOrders() {
  try {
    if (!fs.existsSync(ordersFile)) return [];
    return JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
  } catch (err) {
    console.error('Error reading orders.json:', err);
    return [];
  }
}

function saveOrders(orders: any[]) {
  fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2), 'utf8');
}

// -----------------------------------------------------------------------------
// API Endpoints for Moshiur Portfolio & Admin
// -----------------------------------------------------------------------------

// 1. Get all projects
app.get('/api/projects', (req, res) => {
  const projects = getProjects();
  res.json({ success: true, count: projects.length, data: projects });
});

// 2. Upload / Create new project (Admin Portal)
app.post('/api/projects', (req, res) => {
  try {
    const { title, category, categoryLabel, client, image, price, turnaround, description, deliverables, tags } = req.body;
    if (!title || !image) {
      return res.status(400).json({ success: false, message: 'Title and image are required' });
    }

    const projects = getProjects();
    const newProject = {
      id: `proj-${Date.now()}`,
      title,
      category: category || 'graphic-design',
      categoryLabel: categoryLabel || 'Custom Design',
      client: client || 'Private Commission',
      image,
      price: price || '$15 - $35',
      turnaround: turnaround || '24 - 48 Hours',
      description: description || 'High-impact design asset crafted by Moshiur Abid.',
      deliverables: Array.isArray(deliverables) ? deliverables : ['High-Resolution Master Files', 'Vector / Layered PSD Source', 'Full Commercial License'],
      tags: Array.isArray(tags) ? tags : ['Design', 'Custom'],
      createdAt: new Date().toISOString()
    };

    projects.unshift(newProject);
    saveProjects(projects);

    res.status(201).json({ success: true, message: 'Project uploaded successfully!', data: newProject });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 3. Delete a project
app.delete('/api/projects/:id', (req, res) => {
  try {
    const { id } = req.params;
    let projects = getProjects();
    const initialLen = projects.length;
    projects = projects.filter((p: any) => p.id !== id);

    if (projects.length === initialLen) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    saveProjects(projects);
    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 4. Get all orders (Admin Portal)
app.get('/api/orders', (req, res) => {
  const orders = getOrders();
  res.json({ success: true, count: orders.length, data: orders });
});

// 5. Submit new client order (Buyer Website)
app.post('/api/orders', (req, res) => {
  try {
    const { clientName, email, whatsapp, brandName, packageTier, budget, deadline, brief, customNotes } = req.body;
    if (!clientName || (!email && !whatsapp)) {
      return res.status(400).json({ success: false, message: 'Client name and contact (email or WhatsApp) are required' });
    }

    const orders = getOrders();
    const orderId = `ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder = {
      id: orderId,
      clientName,
      email: email || '',
      whatsapp: whatsapp || '',
      brandName: brandName || 'Individual / Brand',
      packageTier: packageTier || 'Custom Package',
      budget: budget || '$20',
      deadline: deadline || '24 - 48 Hours',
      status: 'Pending',
      createdAt: new Date().toISOString(),
      brief: brief || 'Standard design / photography package request.',
      customNotes: customNotes || ''
    };

    orders.unshift(newOrder);
    saveOrders(orders);

    res.status(201).json({
      success: true,
      message: 'Order received successfully! Moshiur will reach out within 2-4 hours.',
      data: newOrder
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 6. Update order status (Admin Portal)
app.patch('/api/orders/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const orders = getOrders();
    const orderIndex = orders.findIndex((o: any) => o.id === id);

    if (orderIndex === -1) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (status) orders[orderIndex].status = status;
    saveOrders(orders);

    res.json({ success: true, message: 'Order status updated', data: orders[orderIndex] });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 7. Overall stats endpoint (22 total clients, 7 international clients)
app.get('/api/stats', (req, res) => {
  const projects = getProjects();
  res.json({
    success: true,
    data: {
      totalClients: '22',
      internationalClients: '7',
      completedOrders: '22',
      clientRating: '4.9 / 5.0',
      onTimeDelivery: '99.8%',
      totalProjectsInPortfolio: projects.length,
      averageTurnaround: '24 - 48 Hours'
    }
  });
});

// Dedicated standalone Admin Portal route
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// -----------------------------------------------------------------------------
// Vite Server Integration
// -----------------------------------------------------------------------------
async function startServer() {
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`> Moshiur Portfolio & Backend Server running on port ${PORT}`);
  });
}

startServer();
