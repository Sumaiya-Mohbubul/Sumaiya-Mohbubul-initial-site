import { useLocation } from 'react-router-dom';

function Footer({ id, blacklist = [] }: { id: string, blacklist?: string[] }) {
    let component;

    if (!blacklist.includes(useLocation().pathname)) {
        component = (
            <footer id={id} className="footer">
                <div className="container-fluid text-center py-3">
                    <span className="text-muted">© {new Date().getFullYear()} Sumaiya-Mohbubul.github.io</span>
                </div>
            </footer>
        );
    } else component = null;

    return component;
}

export default Footer;
