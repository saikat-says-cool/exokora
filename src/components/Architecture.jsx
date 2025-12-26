import { useNavigate } from 'react-router-dom';
import SEO from './SEO';
import {
    Pulse,
    Cpu,
    PaperPlaneTilt,
    ChartLineUp,
    LinkedinLogo,
    Newspaper,
    Database,
    Shield,
    CheckCircle,
    ArrowRight,
    EnvelopeSimple,
    CalendarCheck,
    ArrowsClockwise,
    Funnel,
    Lightning,
    Target,
    Binoculars
} from '@phosphor-icons/react';

const Architecture = () => {
    const navigate = useNavigate();

    const modules = [
        {
            id: "01",
            icon: Binoculars,
            name: "Find the Right People",
            subtitle: "Signal Detection",
            description: "We monitor real business events to find companies that actually need your help right now.",
            inputs: [
                { icon: Database, label: "System Changes", detail: "Companies switching software or systems." },
                { icon: Target, label: "Leadership Moves", detail: "New hires or departures in the C-suite." },
                { icon: Newspaper, label: "Growth Events", detail: "Funding rounds, acquisitions, or expansions." }
            ],
            output: "Qualified Target List"
        },
        {
            id: "02",
            icon: Funnel,
            name: "Verify & Protect",
            subtitle: "Quality Control",
            description: "We make sure every contact is valid and won't damage your reputation.",
            inputs: [
                { icon: Shield, label: "Conflict Check", detail: "We never contact your clients or competitors." },
                { icon: CheckCircle, label: "Email Verification", detail: "Only real, active email addresses." },
                { icon: LinkedinLogo, label: "Research", detail: "We study each prospect before reaching out." }
            ],
            output: "Vetted Prospects"
        },
        {
            id: "03",
            icon: Pulse,
            name: "Write Messages That Work",
            subtitle: "Personalized Outreach",
            description: "Every email is written specifically for each prospect. No templates, no spam.",
            inputs: [
                { icon: Lightning, label: "Context Matching", detail: "Connecting their situation to your expertise." },
                { icon: ArrowRight, label: "Clear Ask", detail: "Simple, non-pushy conversation starters." },
                { icon: Shield, label: "Tone Control", detail: "Sounds like you, not a salesperson." }
            ],
            output: "Ready-to-Send Messages"
        },
        {
            id: "04",
            icon: PaperPlaneTilt,
            name: "Send & Follow Up",
            subtitle: "Delivery System",
            description: "We handle all the sending and follow-up so your main email stays protected.",
            inputs: [
                { icon: ArrowsClockwise, label: "Safe Sending", detail: "Separate email domains protect your brand." },
                { icon: ChartLineUp, label: "Deliverability", detail: "We maintain high inbox placement rates." },
                { icon: CalendarCheck, label: "Smart Follow-up", detail: "Timed sequences that feel natural." }
            ],
            output: "98%+ Delivery Rate"
        },
        {
            id: "05",
            icon: ChartLineUp,
            name: "Learn & Improve",
            subtitle: "Continuous Optimization",
            description: "We track what works and double down on it. Your results get better over time.",
            inputs: [
                { icon: Target, label: "Response Tracking", detail: "We analyze every reply to find patterns." },
                { icon: Cpu, label: "Campaign Tuning", detail: "More of what works, less of what doesn't." }
            ],
            output: "Better Results Every Month"
        }
    ];

    return (
        <div className="min-h-screen pt-32 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in pb-20">
            <SEO title="How It Works" description="Our 5-step operational framework for generating qualified leads. Signal detection, verification, and personalized outreach." path="/architecture" />

            <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
                <div className="max-w-3xl">
                    <span className="font-tech text-sm uppercase tracking-[0.3em] text-accent-blue mb-4 block">How It Works</span>
                    <h1 className="text-4xl sm:text-7xl font-hand font-bold italic mb-6">The System Behind Your Growth.</h1>
                    <p className="font-tech text-lg text-ink-primary leading-relaxed">
                        We handle everything from finding prospects to booking calls. You focus on what you do best—serving clients.
                    </p>
                </div>
            </div>

            {/* Central Flow */}
            <div className="mb-32 relative">
                <div className="sketch-box p-12 bg-white flex flex-col items-center">
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-paper px-4 font-tech text-xs uppercase text-ink-secondary/50">Your Pipeline Engine</div>
                    <div className="flex flex-wrap justify-center items-center gap-12">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 border border-ink-primary rotate-45 flex items-center justify-center">
                                <Database size={24} className="-rotate-45" />
                            </div>
                            <span className="font-tech text-xs mt-4 uppercase tracking-wider">Prospects In</span>
                        </div>
                        <ArrowRight size={20} className="text-ink-primary/30" />
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 border-2 border-ink-primary flex items-center justify-center">
                                <Cpu size={40} weight="light" />
                            </div>
                            <span className="font-tech text-sm mt-4 uppercase font-bold tracking-wider">EXOKORA</span>
                        </div>
                        <ArrowRight size={20} className="text-ink-primary/30" />
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 border border-ink-primary rotate-45 flex items-center justify-center bg-ink-primary text-white">
                                <EnvelopeSimple size={24} className="-rotate-45" />
                            </div>
                            <span className="font-tech text-xs mt-4 uppercase tracking-wider">Calls Booked</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Module Breakdown */}
            <div className="space-y-20 mb-32">
                {modules.map((module) => (
                    <div key={module.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-4 sticky top-32">
                            <div className="flex items-center space-x-4 mb-4">
                                <span className="font-tech text-sm font-bold w-10 h-10 border border-ink-primary flex items-center justify-center">{module.id}</span>
                                <div className="h-[1px] flex-grow bg-ink-primary/10"></div>
                            </div>
                            <h3 className="text-4xl font-hand font-bold italic mb-4 leading-tight">{module.name}</h3>
                            <p className="font-tech text-base text-ink-primary leading-relaxed border-l-2 border-accent-blue/30 pl-6">
                                {module.description}
                            </p>
                        </div>

                        <div className="lg:col-span-8">
                            <div className="sketch-box p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-10 border-b border-ink-primary/5 pb-6">
                                    <div className="w-12 h-12 bg-white border border-ink-primary flex items-center justify-center">
                                        <module.icon size={24} weight="light" />
                                    </div>
                                    <span className="font-tech text-sm uppercase tracking-wider text-ink-secondary">{module.subtitle}</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                    {module.inputs.map((input, iIdx) => (
                                        <div key={iIdx} className="group">
                                            <div className="flex items-center gap-3 mb-3">
                                                <input.icon size={20} className="text-ink-primary" />
                                                <span className="font-tech font-bold text-sm uppercase">{input.label}</span>
                                            </div>
                                            <p className="text-sm font-tech text-ink-primary leading-relaxed">
                                                {input.detail}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-4 p-4 border border-dashed border-ink-primary/20 bg-paper/50">
                                    <span className="font-tech text-xs uppercase tracking-widest font-bold opacity-50">Result:</span>
                                    <span className="font-tech text-sm uppercase font-bold text-accent-blue tracking-wider">{module.output}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center py-24 border-t border-ink-primary/10">
                <blockquote className="font-hand text-3xl md:text-5xl italic text-ink-primary mb-12 max-w-4xl mx-auto leading-tight">
                    "One great conversation is worth more than a thousand cold emails. We find you those conversations."
                </blockquote>
                <button
                    onClick={() => navigate('/apply')}
                    className="btn-primary"
                >
                    Book Your Briefing
                </button>
            </div>
        </div>
    );
};

export default Architecture;
