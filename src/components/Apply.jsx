import { useNavigate } from 'react-router-dom';
import { Calendar } from '@phosphor-icons/react';

const Apply = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-paper animate-fade-in relative">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="font-tech text-sm uppercase tracking-[0.3em] text-accent-blue mb-4 block">Let's Talk</span>
                    <h1 className="text-5xl md:text-8xl font-hand font-bold italic text-ink-primary mb-6">Book Your Briefing.</h1>
                    <p className="font-tech text-lg text-ink-primary leading-relaxed max-w-2xl mx-auto">
                        Pick a time that works for you. We'll spend 30 minutes understanding your business and showing you exactly how we can help you get more clients.
                    </p>
                </div>

                <div className="sketch-box p-4 md:p-8 bg-white min-h-[700px] relative">
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-paper px-4 font-tech text-sm uppercase text-ink-secondary/50 flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>30-Minute Call</span>
                    </div>

                    <iframe
                        src="https://cal.id/saikat/exokora-briefing?embed=true"
                        width="100%"
                        height="700px"
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-full min-h-[700px]"
                    ></iframe>
                </div>

                <p className="mt-12 font-tech text-sm text-center text-ink-primary">
                    No pressure. No obligations. Just a conversation about your growth.
                </p>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="font-tech text-sm uppercase tracking-widest text-ink-secondary hover:text-ink-primary transition-colors"
                    >
                        ← Back Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Apply;
