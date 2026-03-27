import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from '../components/ui';
import { Mail, Clock, AlertTriangle, AlertOctagon } from 'lucide-react';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h1 className="mb-4">Your invoices. Chased automatically.</h1>
                <p className="mb-8" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    Overdue automatically sends escalating email reminders to your clients so you never have to awkwardly chase payments again.
                </p>

                <div className="mb-8">
                    <Button variant="primary" onClick={() => navigate('/dashboard')} style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
                        Start Recovery
                    </Button>
                </div>

                {/* Timeline Visual */}
                <Card style={{ textAlign: 'left', marginTop: '3rem' }}>
                    <h3 className="mb-4">Automated Escalation Timeline</h3>

                    <div className="flex flex-col gap-4">
                        <TimelineItem day="0" icon={<Mail />} title="Friendly Reminder" desc="Sent on the due date. Polite nudge." color="#4ADE80" />
                        <TimelineItem day="3" icon={<Clock />} title="Notice of Overdue" desc="Firm reminder that payment is late." color="#FFD700" />
                        <TimelineItem day="7" icon={<AlertTriangle />} title="Overdue Warning" desc="Strongly worded. Next steps outlined." color="#FF8C00" />
                        <TimelineItem day="14" icon={<AlertOctagon />} title="Final Notice" desc="Last chance before further action." color="#FF4444" />
                    </div>
                </Card>
            </div>
        </div>
    );
};

const TimelineItem = ({ day, icon, title, desc, color }) => (
    <div className="flex items-center gap-4 p-4" style={{ border: '3px solid #000', backgroundColor: '#fff', boxShadow: '2px 2px 0 #000' }}>
        <div style={{ background: color, width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #000', borderRadius: '50%' }}>
            {icon}
        </div>
        <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
                <strong>Day {day}: {title}</strong>
                <span className="neo-badge" style={{ background: color, color: '#000', padding: '0.1rem 0.5rem' }}>Active</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>{desc}</p>
        </div>
    </div>
);

export default Landing;
