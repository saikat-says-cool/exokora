import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react';

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const links = [
        { id: '/architecture', label: 'Architecture' },
        { id: '/blueprint', label: 'Blueprint' },
        { id: '/casestudy', label: 'Case Study' },
        { id: '/manifesto', label: 'Manifesto' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-paper/95 backdrop-blur-md py-4 border-b border-ink-primary/5' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-ink-primary">
                    <div
                        onClick={() => navigate('/')}
                        className="font-hand text-3xl font-bold tracking-tight cursor-pointer z-50 relative"
                    >
                        EXOKORA
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-12 text-sm uppercase font-tech tracking-[0.15em] font-medium">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => navigate(link.id)}
                                className={`hover:text-accent-blue transition-colors relative group py-2 ${isActive(link.id) ? 'text-accent-blue font-bold' : 'text-ink-primary'}`}
                            >
                                {link.label}
                                {isActive(link.id) && (
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-blue"></span>
                                )}
                            </button>
                        ))}
                        <button
                            onClick={() => navigate('/apply')}
                            className="btn-primary"
                        >
                            Book a Call
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden z-50 relative">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-ink-primary">
                            {isMenuOpen ? <X size={24} /> : <List size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-paper z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                {links.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => navigate(link.id)}
                        className={`font-hand text-4xl font-bold italic ${isActive(link.id) ? 'text-accent-blue' : 'text-ink-primary'}`}
                    >
                        {link.label}
                    </button>
                ))}
                <button
                    onClick={() => navigate('/apply')}
                    className="btn-primary px-12 py-4 mt-8"
                >
                    Book a Call
                </button>
            </div>
        </>
    );
};

export default Nav;
