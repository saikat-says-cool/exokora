import { useNavigate } from 'react-router-dom';
import { Package, Lightning, ShieldCheck, ArrowsClockwise } from '@phosphor-icons/react';

const Economics = () => {
    const navigate = useNavigate();

    const tiers = [
        {
            title: "Setup",
            price: "One-Time Investment",
            desc: "We build your complete outbound system from scratch. Email infrastructure, targeting criteria, and messaging framework.",
            features: ["Dedicated email domains", "Target audience definition", "Message templates designed for you"],
            icon: Lightning
        },
        {
            title: "Management",
            price: "Monthly Retainer",
            desc: "We run your system every month. Finding prospects, writing messages, and booking calls directly on your calendar.",
            features: ["Ongoing prospect research", "Personalized outreach", "Continuous optimization"],
            icon: ArrowsClockwise
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in relative">
            <div className="border-b border-ink-primary/10 pb-12 mb-16">
                <span className="font-tech text-sm uppercase tracking-[0.3em] text-accent-blue mb-4 block">How We Work Together</span>
                <h1 className="text-5xl md:text-8xl font-hand font-bold italic text-ink-primary">Two Simple Phases.</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                {tiers.map((tier, idx) => (
                    <div key={idx} className="sketch-box p-10 md:p-12 flex flex-col">
                        <div className="flex justify-between items-start mb-10">
                            <div className="w-12 h-12 border border-ink-primary/10 flex items-center justify-center">
                                <tier.icon size={24} weight="light" className="text-ink-primary" />
                            </div>
                            <span className="font-tech text-sm uppercase font-bold text-accent-blue tracking-widest">{tier.price}</span>
                        </div>
                        <h3 className="text-4xl font-hand font-bold italic mb-6">{tier.title}</h3>
                        <p className="font-tech text-base text-ink-primary leading-relaxed mb-10 flex-grow">
                            {tier.desc}
                        </p>
                        <ul className="space-y-4 mb-10">
                            {tier.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                                    <span className="font-tech text-sm text-ink-primary">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="sketch-box p-12 bg-white flex flex-col md:flex-row items-center justify-between gap-12 group">
                <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-3xl font-hand font-bold italic mb-4">Our Promise.</h3>
                    <p className="font-tech text-base text-ink-primary leading-relaxed border-l-2 border-accent-blue/20 pl-6">
                        We protect your reputation above everything else. If anything we do could hurt your brand, we stop immediately. Your trust is more important than any deal.
                    </p>
                </div>
                <button onClick={() => navigate('/apply')} className="btn-primary whitespace-nowrap">
                    Book Your Briefing
                </button>
            </div>
        </div>
    );
};

export default Economics;
