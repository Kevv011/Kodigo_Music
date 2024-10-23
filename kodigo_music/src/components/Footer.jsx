import '../assets/css/Footer.css';

export const Footer = () => {

    return (
        <footer className="text-center mx-auto">
            <div className="text-center p-3 text-white">
                &copy; {new Date().getFullYear()} Kodigo Music. Todos los derechos reservados.
            </div>
        </footer>
    );
};