import { useNavigate } from 'react-router-dom';
import SEO from './SEO';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center animate-fade-in">
            <SEO title="Home" description="Get more high-value clients for your fractional executive firm without lifting a finger. Done-for-you outbound infrastructure." />

            <div className="flex flex-col mb-8">
                <span className="font-tech text-sm uppercase tracking-[0.3em] text-accent-blue mb-4">For Fractional Executives</span>
                <div className="h-[1px] w-20 bg-ink-primary/20"></div>
            </div>

            <h1 className="text-5xl md:text-8xl leading-[1.1] mb-10 max-w-4xl font-hand font-bold italic text-ink-primary">
                Get More Clients. <br /> Without Lifting a Finger.
            </h1>

            <p className="text-lg md:text-xl font-tech text-ink-primary max-w-2xl mb-12 leading-relaxed border-l-2 border-accent-blue pl-8">
                We build and run your outbound system so you get booked calls with qualified prospects every month. No cold calling. No spam. Just warm conversations with people who need your help.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-24">
                <button onClick={() => navigate('/apply')} className="btn-primary">
                    Book Your Briefing
                </button>
                <button onClick={() => navigate('/casestudy')} className="font-tech text-sm uppercase tracking-widest border border-ink-primary px-8 py-3 hover:bg-ink-primary hover:text-white transition-all">
                    See Results
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="sketch-box p-8 md:p-10">
                    <span className="font-tech text-xs text-accent-blue uppercase mb-4 block">The Problem</span>
                    <h3 className="text-3xl mb-4 font-hand italic font-bold">Referrals Dry Up</h3>
                    <p className="font-tech text-sm text-ink-primary leading-relaxed">
                        Your network has limits. When referrals slow down, so does your pipeline. You're too busy delivering to go out and sell.
                    </p>
                </div>
                <div className="sketch-box p-8 md:p-10">
                    <span className="font-tech text-xs text-accent-blue uppercase mb-4 block">Our Solution</span>
                    <h3 className="text-3xl mb-4 font-hand italic font-bold">Done-For-You Outreach</h3>
                    <p className="font-tech text-sm text-ink-primary leading-relaxed">
                        We find the right prospects, write the right messages, and handle all the follow-up. You just show up to the calls.
                    </p>
                </div>
                <div className="sketch-box p-8 md:p-10">
                    <span className="font-tech text-xs text-accent-blue uppercase mb-4 block">Your Outcome</span>
                    <h3 className="text-3xl mb-4 font-hand italic font-bold">Predictable Growth</h3>
                    <p className="font-tech text-sm text-ink-primary leading-relaxed">
                        A steady stream of qualified conversations on your calendar every month. No more feast-or-famine cycles.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
