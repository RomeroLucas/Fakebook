import './footer.css'

export default function footer() {
    return (
        <footer className="container-fluid footer-container">
            Este é um projeto de estudos para portfólio, por favor
            não coloque e-mail e senhas verdadeiras por mais que as
            senhas estejam criptografadas.
            Desenvolvido por <span className="badge bg-secondary"> &copy; Lucas Romero </span>
        </footer>
    )
}