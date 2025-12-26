import { useNavigate } from 'react-router-dom';
import SEO from './SEO';

const Manifesto = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in relative">
            <SEO title="Manifesto" description="We believe in quality over quantity. Reputation over risky tactics. And real conversations over spam." path="/manifesto" />

            <div className="border-b border-ink-primary/10 pb-12 mb-16">
                <span className="font-tech text-sm uppercase tracking-[0.3em] text-accent-blue mb-4 block">What We Believe</span>
                <h1 className="text-5xl md:text-8xl font-hand font-bold italic text-ink-primary">Our Philosophy.</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-4 sticky top-32">
                    <div className="sketch-box p-8 bg-paper">
                        <p className="font-tech text-base leading-relaxed text-ink-primary">
                            "Outbound isn't about sending more emails. It's about starting real conversations with the right people at the right time."
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-8 space-y-24">
                    <section>
                        <span className="font-tech text-sm uppercase font-bold text-accent-blue border-b border-accent-blue pb-2">01. Your Reputation Comes First</span>
                        <h2 className="text-4xl md:text-5xl font-hand font-bold italic mt-8 mb-6 leading-tight">We never risk your brand.</h2>
                        <p className="font-tech text-lg text-ink-primary leading-relaxed">
                            Most outbound feels like spam because it is. We use separate email infrastructure so your main domain stays clean. If anything we do could hurt your reputation, we don't do it. Period.
                        </p>
                    </section>

                    <section>
                        <span className="font-tech text-sm uppercase font-bold text-accent-blue border-b border-accent-blue pb-2">02. Quality Over Quantity</span>
                        <h2 className="text-4xl md:text-5xl font-hand font-bold italic mt-8 mb-6 leading-tight">We don't buy lists.</h2>
                        <p className="font-tech text-lg text-ink-primary leading-relaxed">
                            Lists are outdated the moment they're created. Instead, we watch for real signals—companies actually going through changes that make them need your help. Every person we contact has a real reason to talk to you.
                        </p>
                    </section>

                    <section>
                        <span className="font-tech text-sm uppercase font-bold text-accent-blue border-b border-accent-blue pb-2">03. Messages That Sound Human</span>
                        <h2 className="text-4xl md:text-5xl font-hand font-bold italic mt-8 mb-6 leading-tight">No templates. No tricks.</h2>
                        <p className="font-tech text-lg text-ink-primary leading-relaxed">
                            Every email we send is written for one person. We connect their situation to your expertise. The goal isn't to "generate leads"—it's to start real conversations with people who want to talk.
                        </p>
                    </section>

                    <div className="pt-12">
                        <button onClick={() => navigate('/apply')} className="btn-primary w-full md:w-auto px-16">
                            Book Your Briefing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manifesto;
