function Home() {
    return (
        <div>
            <h1>Bem-vindo à Minha Landing Page</h1>
            <p>Aqui você encontra soluções para todos os seus desafios.</p>
            <p>Nossa missão é proporcionar qualidade e excelência em tudo o que fazemos.</p>
            <p>Entre em contato e descubra como podemos ajudar você a alcançar o sucesso.</p>
            
            <ul>
                <li>Solução personalizada para suas necessidades</li>
                <li>Equipe qualificada e dedicada</li>
                <li>Atendimento 24/7</li>
            </ul>

            <button onClick={() => alert("Obrigado por visitar!")}>Saiba Mais</button>

            <footer>
                <p>&copy; 2024 Minha Landing Page. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Home;
