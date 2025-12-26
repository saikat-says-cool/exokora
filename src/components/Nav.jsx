import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: '/architecture', label: 'Architecture' },
        { id: '/blueprint', label: 'Blueprint' },
        { id: '/casestudy', label: 'Case Study' },
        { id: '/manifesto', label: 'Manifesto' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-paper/80 backdrop-blur-md py-4 border-b border-ink-primary/5' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-ink-primary">
                <div
                    onClick={() => navigate('/')}
                    className="font-hand text-3xl font-bold tracking-tight cursor-pointer"
                >
                    EXOKORA
                </div>

                <div className="hidden md:flex items-center space-x-10 text-[10px] uppercase font-tech tracking-[0.2em]">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => navigate(link.id)}
                            className={`hover:text-accent-blue transition-colors relative group ${isActive(link.id) ? 'text-accent-blue' : 'text-ink-secondary'}`}
                        >
                            {link.label}
                            {isActive(link.id) && (
                                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-blue"></span>
                            )}
                        </button>
                    ))}
                    <button
                        onClick={() => navigate('/apply')}
                        className="btn-primary"
                    >
                        Apply
                    </button>
                </div>

                <div className="md:hidden">
                    <button className="p-2">
                        <div className="w-6 h-[1px] bg-ink-primary mb-1.5"></div>
                        <div className="w-6 h-[1px] bg-ink-primary"></div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
