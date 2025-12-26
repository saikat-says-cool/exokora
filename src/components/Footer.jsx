import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="border-t border-ink-primary/10 bg-paper py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0">
                <div className="max-w-xs">
                    <h2 className="font-hand text-4xl font-bold italic mb-6">EXOKORA.</h2>
                    <p className="font-tech text-sm text-ink-primary leading-relaxed mb-6">
                        Done-for-you outbound for fractional executives. We find the clients. You close the deals.
                    </p>
                    <div className="font-tech text-[10px] text-ink-primary/40 leading-relaxed uppercase tracking-[0.2em] italic">
                        380 G/1, South Behala Road,<br />
                        Kolkata, West Bengal,<br />
                        India, Kolkata-700061
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-12 md:gap-24">
                    <div>
                        <h4 className="font-tech text-sm uppercase font-bold tracking-widest text-ink-primary mb-6">Navigation</h4>
                        <div className="flex flex-col space-y-4 font-tech text-sm text-ink-primary uppercase tracking-wider">
                            <button onClick={() => navigate('/architecture')} className="text-left hover:text-accent-blue transition-colors">How It Works</button>
                            <button onClick={() => navigate('/blueprint')} className="text-left hover:text-accent-blue transition-colors">The Process</button>
                            <button onClick={() => navigate('/casestudy')} className="text-left hover:text-accent-blue transition-colors">Results</button>
                            <button onClick={() => navigate('/economics')} className="text-left hover:text-accent-blue transition-colors">Pricing</button>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-tech text-sm uppercase font-bold tracking-widest text-ink-primary mb-6">Connect</h4>
                        <div className="flex flex-col space-y-4 font-tech text-sm text-ink-primary uppercase tracking-wider">
                            <button onClick={() => navigate('/apply')} className="text-left hover:text-accent-blue transition-colors">Book a Call</button>
                            <a href="https://x.com/saikat_scales" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">Twitter / X</a>
                            <a href="mailto:saikat@exokora.online" className="hover:text-accent-blue transition-colors">Contact CEO</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-ink-primary/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-tech text-ink-secondary uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} Exokora. All rights reserved.</p>
                <div className="flex space-x-8">
                    <a href="#" className="hover:text-ink-primary transition-colors">Privacy</a>
                    <a href="#" className="hover:text-ink-primary transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
