import React, { useState } from 'react';
import { Card, Button, Badge, Modal, Input } from '../components/ui';
import { LayoutDashboard, FileText, Settings, Plus, Mail } from 'lucide-react';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [invoices, setInvoices] = useState([
        { id: 'INV-001', client: 'Acme Corp', amount: 1500, due: '2026-03-20', status: 'overdue' },
        { id: 'INV-002', client: 'Globex Inc', amount: 3200, due: '2026-03-25', status: 'chasing' },
        { id: 'INV-003', client: 'Initech', amount: 850, due: '2026-03-28', status: 'chasing' },
    ]);

    return (
        <div className="flex" style={{ minHeight: '100vh' }}>
            {/* Sidebar */}
            <aside style={{ width: '250px', borderRight: '3px solid #000', background: '#fff', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <h2 className="mb-8" style={{ fontSize: '1.75rem', color: '#FF4444' }}>OVERDUE</h2>
                <nav className="flex flex-col gap-4 flex-1">
                    <NavItem icon={<LayoutDashboard />} label="Dashboard" active />
                    <NavItem icon={<FileText />} label="Invoices" />
                    <NavItem icon={<Settings />} label="Settings" />
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h2>Dashboard</h2>
                    <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                        <Plus size={20} /> Add Invoice
                    </Button>
                </div>

                {/* Stats */}
                <div className="flex gap-6 mb-8">
                    <Card className="flex-1">
                        <h3 className="mb-2">Total Outstanding</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>$5,550</div>
                    </Card>
                    <Card className="flex-1">
                        <h3 className="mb-2">Active Sequences</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>3</div>
                    </Card>
                </div>

                {/* Invoice List */}
                <Card style={{ padding: 0, overflow: 'hidden' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '3px solid #000', background: '#FFD700' }}>
                        <h3 style={{ margin: 0 }}>Recent Invoices</h3>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '3px solid #000' }}>
                                <th style={{ padding: '1rem' }}>Invoice</th>
                                <th style={{ padding: '1rem' }}>Client</th>
                                <th style={{ padding: '1rem' }}>Amount</th>
                                <th style={{ padding: '1rem' }}>Due Date</th>
                                <th style={{ padding: '1rem' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((inv, idx) => (
                                <tr key={inv.id} style={{ borderBottom: idx !== invoices.length - 1 ? '3px solid #000' : 'none' }}>
                                    <td style={{ padding: '1rem', fontWeight: 700 }}>{inv.id}</td>
                                    <td style={{ padding: '1rem' }}>{inv.client}</td>
                                    <td style={{ padding: '1rem' }}>${inv.amount}</td>
                                    <td style={{ padding: '1rem' }}>{inv.due}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <Badge variant={inv.status}>{inv.status}</Badge>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </main>

            {/* Add Invoice Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Invoice">
                <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                    <Input id="client_name" label="Client Name" placeholder="E.g. Acme Corp" required />
                    <Input id="client_email" type="email" label="Client Email" placeholder="billing@acme.com" required />
                    <div className="flex gap-4">
                        <div className="flex-1"><Input id="amount" type="number" label="Amount ($)" placeholder="1500" required /></div>
                        <div className="flex-1"><Input id="due_date" type="date" label="Due Date" required /></div>
                    </div>

                    <div className="mb-6 p-4" style={{ backgroundColor: '#E5E5E5', border: '3px solid #000' }}>
                        <h4 className="mb-2 flex items-center gap-2"><Mail size={16} /> Sequence Preview</h4>
                        <p style={{ fontSize: '0.85rem', margin: 0 }}>Emails will trigger automatically on:</p>
                        <ul style={{ fontSize: '0.85rem', paddingLeft: '1.5rem', marginTop: '0.5rem', fontWeight: 600 }}>
                            <li>Day 0 (Due Date)</li>
                            <li>Day 3 (Due Notice)</li>
                            <li>Day 7 (Overdue Warning)</li>
                            <li>Day 14 (Final Notice)</li>
                        </ul>
                    </div>

                    <Button variant="primary" type="submit" style={{ width: '100%' }}>Start Recovery Sequence</Button>
                </form>
            </Modal>
        </div>
    );
};

const NavItem = ({ icon, label, active }) => (
    <div
        className="flex items-center gap-3 p-3 font-bold"
        style={{
            border: '3px solid #000',
            boxShadow: active ? '4px 4px 0 #000' : '2px 2px 0 #000',
            background: active ? '#FFD700' : '#fff',
            cursor: 'pointer',
            transition: 'all 0.2s',
            transform: active ? 'translate(-2px, -2px)' : 'none'
        }}
    >
        {icon} <span>{label}</span>
    </div>
);

export default Dashboard;
