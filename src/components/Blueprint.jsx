import { useNavigate } from 'react-router-dom';
import { Shield, Terminal, WifiHigh, Cpu, Target, Funnel } from '@phosphor-icons/react';

const Blueprint = () => {
    const navigate = useNavigate();

    const phases = [
        {
            id: '01',
            title: 'Define Your Ideal Client',
            desc: 'We work with you to identify exactly who you want to reach. Industry, company size, role, and the problems they face.',
            icon: <Shield size={32} weight="light" className="text-ink-primary" />
        },
        {
            id: '02',
            title: 'Set Up Your System',
            desc: 'We create dedicated email infrastructure that keeps your main domain safe and your reputation protected.',
            icon: <Terminal size={32} weight="light" className="text-ink-primary" />
        },
        {
            id: '03',
            title: 'Find Active Opportunities',
            desc: 'We monitor for real buying signals—companies that are actively looking for help right now.',
            icon: <WifiHigh size={32} weight="light" className="text-ink-primary" />
        },
        {
            id: '04',
            title: 'Write Personal Messages',
            desc: 'Every email is crafted specifically for each prospect. No templates. No generic pitches.',
            icon: <Cpu size={32} weight="light" className="text-ink-primary" />
        },
        {
            id: '05',
            title: 'Send & Follow Up',
            desc: 'We handle all the outreach and follow-up. You only hear about it when someone wants to talk.',
            icon: <Target size={32} weight="light" className="text-ink-primary" />
        },
        {
            id: '06',
            title: 'Improve Every Month',
            desc: 'We track what works and optimize continuously. Your results get better over time.',
            icon: <Funnel size={32} weight="light" className="text-ink-primary" />
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-12 animate-fade-in relative">
            <div className="border-b border-ink-primary/10 pb-12 mb-16">
                <span className="font-tech text-sm uppercase tracking-[0.3em] text-accent-blue mb-4 block">The Process</span>
                <h1 className="text-5xl md:text-8xl font-hand font-bold italic text-ink-primary">How We Work.</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {phases.map((phase) => (
                    <div key={phase.id} className="sketch-box p-10 group overflow-hidden relative">
                        <div className="flex justify-between items-start mb-12">
                            <span className="font-tech text-sm border border-ink-primary/10 px-3 py-1 bg-paper">{phase.id}</span>
                            <div className="opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                {phase.icon}
                            </div>
                        </div>
                        <h4 className="font-hand text-3xl mb-4 font-bold italic transition-colors group-hover:text-accent-blue">{phase.title}</h4>
                        <p className="font-tech text-sm text-ink-primary leading-relaxed">{phase.desc}</p>

                        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-ink-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    </div>
                ))}
            </div>

            <div className="mt-24 flex flex-col items-center">
                <p className="font-tech text-base text-ink-primary mb-8">Ready to stop worrying about where your next client will come from?</p>
                <button
                    onClick={() => navigate('/apply')}
                    className="btn-primary px-16"
                >
                    Book Your Briefing
                </button>
            </div>
        </div>
    );
};

export default Blueprint;
