import { useNavigate } from 'react-router-dom';
import SEO from './SEO';
import { ArrowLeft, TrendUp, UserCheck, Strategy, Microscope, ChartBar } from '@phosphor-icons/react';

const CaseStudy = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in relative">
            <SEO title="Case Study" description="See how Vanguard CFOs added $1.4M to their pipeline in 6 months using Exokora's private outbound infrastructure." path="/casestudy" />

            <div className="flex flex-col md:flex-row justify-between items-end border-b border-ink-primary/10 pb-12 mb-16 gap-8">
                <div>
                    <span className="font-tech text-sm uppercase tracking-[0.3em] text-accent-blue mb-4 block">Client Results</span>
                    <h1 className="text-4xl md:text-7xl font-hand font-bold italic text-ink-primary">Real Numbers. Real Growth.</h1>
                </div>
                <button
                    onClick={() => navigate('/')}
                    className="group flex items-center space-x-2 font-tech text-sm uppercase tracking-widest text-ink-secondary hover:text-ink-primary transition-colors"
                >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                <div className="sketch-box p-10 md:p-12">
                    <h2 className="text-3xl font-hand font-bold italic mb-8 border-b border-ink-primary/5 pb-4">The Challenge</h2>
                    <p className="font-tech text-base text-ink-primary leading-relaxed mb-8">
                        "We're a fractional CFO firm with a great reputation. All our clients came from referrals. But by Q3, we hit a wall. Our partners were too busy delivering to network, and we couldn't risk our reputation with typical lead gen."
                    </p>
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-none border border-ink-primary flex items-center justify-center font-hand text-2xl italic font-bold">V</div>
                        <div>
                            <p className="font-tech text-sm font-bold uppercase">Partner, Vanguard CFOs</p>
                            <p className="font-tech text-sm text-ink-secondary">Mid-Atlantic Region</p>
                        </div>
                    </div>
                </div>

                <div className="sketch-box p-10 md:p-12">
                    <h2 className="text-3xl font-hand font-bold italic mb-8 border-b border-ink-primary/5 pb-4">What We Did</h2>
                    <div className="space-y-6">
                        {[
                            { icon: Strategy, label: "Found the Right Targets", detail: "CEOs of companies between $10M-$50M in revenue." },
                            { icon: Microscope, label: "Spotted Buying Signals", detail: "Companies switching from QuickBooks to NetSuite." },
                            { icon: ChartBar, label: "Protected Their Brand", detail: "Used separate domains so their main email stayed safe." }
                        ].map((step, idx) => (
                            <div key={idx} className="flex items-start space-x-4">
                                <div className="mt-1">
                                    <step.icon size={24} className="text-accent-blue" />
                                </div>
                                <div>
                                    <span className="font-hand font-bold italic text-xl text-ink-primary">{step.label}</span>
                                    <p className="font-tech text-sm text-ink-primary leading-relaxed">{step.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="sketch-box p-12 bg-white mb-24 overflow-hidden relative group">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-5xl font-hand font-bold italic mb-4">The Results.</h2>
                        <p className="font-tech text-sm text-ink-primary leading-relaxed">
                            After 6 months of running their system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full md:w-2/3">
                        {[
                            { label: "New Pipeline", value: "$1.4M" },
                            { label: "Calls Booked", value: "34" },
                            { label: "Close Rate", value: "12%" }
                        ].map((stat, idx) => (
                            <div key={idx} className="p-6 border-l border-ink-primary/10 group-hover:border-ink-primary/20 transition-all">
                                <div className="font-tech text-sm uppercase text-ink-secondary mb-2">{stat.label}</div>
                                <div className="text-6xl font-hand font-bold">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center max-w-4xl mx-auto py-20 border-t border-ink-primary/10">
                <blockquote className="font-hand text-3xl md:text-5xl italic leading-tight mb-12 text-ink-primary">
                    "Exokora gave us something we never had before: <span className="underline decoration-accent-blue/30 underline-offset-8">predictable growth</span>. I don't worry about where our next client is coming from anymore."
                </blockquote>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-[1px] bg-ink-primary/20 mb-4"></div>
                    <span className="font-tech text-sm font-bold uppercase tracking-widest">— Managing Partner, Vanguard CFO</span>
                </div>

                <div className="mt-16">
                    <button onClick={() => navigate('/apply')} className="btn-primary">
                        Get Results Like This
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
