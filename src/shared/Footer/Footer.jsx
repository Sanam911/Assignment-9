

const Footer = () => {
    return (
        <footer className="footer p-10 bg-violet-50 text-base-content ">
            <aside>
                <div>
                    <h2 className="text-3xl font-bold text-violet-500">Dream.Nest</h2>
                </div>
                <div>

                </div>
            </aside>
            <nav>
                <h6 className="footer-title text-violet-500">Services</h6>
                <a className="link link-hover text-vio text-violet-400">Budget</a>
                <a className="link link-hover text-violet-400">Design</a>
                <a className="link link-hover text-violet-400">Decorating</a>
                
            </nav>
            <nav>
                <h6 className="footer-title text-violet-500">Company</h6>
                <a className="link link-hover text-violet-400">About us</a>
                <a className="link link-hover text-violet-400">Contact</a>
                
            </nav>
            <nav>
                <h6 className="footer-title text-violet-500">Legal</h6>
                <a className="link link-hover text-violet-400">Terms of use</a>
                <a className="link link-hover text-violet-400">Privacy policy</a>
                
            </nav>
        </footer>
    );
};

export default Footer;