// languageSwitcher.js

document.addEventListener('DOMContentLoaded', function () {
    const englishButton = document.getElementById('english-button');
    const portugueseButton = document.getElementById('portuguese-button');
    const englishButton1 = document.getElementById('english-button1');
    const portugueseButton1 = document.getElementById('portuguese-button1');
    
    const translations = {
        pt: {
            "Home": "Início",
            "About": "Sobre",
            "Projects": "Projetos",
            "Certificates": "Certificados",
            "Skills": "Habilidades",
            "Contact": "Contato",
            "26 Years": "26 Anos",
            "About Me": "Sobre Mim",
            "Resume.pdf": "Meu Curriculo.PDF",
            "I am a dedicated programming student with a strong interest in the financial and technological markets. Passionate about artificial intelligence, I am also a keen self-learner, continuously seeking to expand my knowledge and skills in this dynamic field. My enthusiasm for technology drives me to explore new challenges and innovate in the ever-evolving landscape of programming.":
                "Sou um estudante de programação dedicado com um forte interesse nos mercados financeiro e tecnológico. Apaixonado por inteligência artificial, sou também um aprendiz autodidata, buscando continuamente expandir meu conhecimento e habilidades neste campo dinâmico. Meu entusiasmo por tecnologia me impulsiona a explorar novos desafios e inovar no sempre em evolução do mundo da programação.",
            "Certificated Skills": "Cursos certificados",
            "Programming Languages": "Linguagens de Programação",
            "Frameworks & Libraries": "Frameworks e Bibliotecas",
            "Development Principles": "Princípios de Desenvolvimento",
            "Interpersonal Skills": "Habilidades Interpessoais",
            "Communication": "Comunicação",
            "Adaptability": "Adaptabilidade",
            "Creative Problem Solving": "Solução de Problemas",
            "Quick Self-Learner": "Aprendizado Rápido",
            "Atention to detail": "Atenção aos Detalhes",
            "Object-Oriented Programming": "Programação Orientada a Objetos",
            "Design Patterns": "Padrões de Design",
            "Big O' Notation": "Notação Big O",
            "Clean Architecture": "Arquitetura Limpa",
            "Agile Methodology": "Metodologia Ágil",
            "Phone":"Whatsapp",
            "Show more...":"Mais detalhes...",
            "Statistics for Data Science": "Estatísticas para Ciência de Dados",
            "An e-commerce site for selling mobile phones with a diverse catalog and a shopping cart that allows users to add and remove products. The shopping simulation is integrated with the inventory, preventing purchases of unavailable items. Users can also leave reviews for products. The admin panel enables order management, sales tracking, and report generation with graphs.":
            "Um site de e-commerce para venda de celulares, com um catálogo diversificado e um carrinho de compras que permite aos usuários adicionar e remover produtos. A simulação de compras é integrada ao estoque, evitando compras de itens indisponíveis. Os usuários também podem deixar avaliações para os produtos. O painel administrativo possibilita o gerenciamento de pedidos, acompanhamento de vendas e geração de relatórios com gráficos."
            ,
            "This REST API enables storing hotels within individual sites and multiple sites within a main site, functioning as a search tool to find the best hotel.": 
                "Esta API REST permite armazenar hotéis em sites individuais e vários sites dentro de um site principal, funcionando como uma ferramenta de busca para encontrar o melhor hotel.",
        },
        en: {
            "Início": "Home",
            "Sobre": "About",
            "Projetos": "Projects",
            "Certificados": "Certificates",
            "Habilidades": "Skills",
            "Contato": "Contact",
            "26 Anos": "26 Years",
            "Sobre Mim": "About Me",
            "Meu Curriculo.PDF": "Resume.pdf",
            "Sou um estudante de programação dedicado com um forte interesse nos mercados financeiro e tecnológico. Apaixonado por inteligência artificial, sou também um aprendiz autodidata, buscando continuamente expandir meu conhecimento e habilidades neste campo dinâmico. Meu entusiasmo por tecnologia me impulsiona a explorar novos desafios e inovar no sempre em evolução do mundo da programação.":
                "I am a dedicated programming student with a strong interest in the financial and technological markets. Passionate about artificial intelligence, I am also a keen self-learner, continuously seeking to expand my knowledge and skills in this dynamic field. My enthusiasm for technology drives me to explore new challenges and innovate in the ever-evolving landscape of programming.",
            "Cursos certificados": "Certificated Skills",
            "Linguagens de Programação": "Programming Languages",
            "Frameworks e Bibliotecas": "Frameworks & Libraries",
            "Princípios de Desenvolvimento": "Development Principles",
            "Habilidades Interpessoais": "Interpersonal Skills",
            "Comunicação": "Communication",
            "Adaptabilidade": "Adaptability",
            "Solução de Problemas": "Creative Problem Solving",
            "Aprendizado Rápido": "Quick Self-Learner",
            "Atenção aos Detalhes": "Atention to detail",
            "Programação Orientada a Objetos": "Object-Oriented Programming",
            "Padrões de Design": "Design Patterns",
            "Notação Big O": "Big O' Notation",
            "Arquitetura Limpa": "Clean Architecture",
            "Metodologia Ágil": "Agile Methodology",
            "Whatsapp":"Phone",
            "Estatísticas para Ciência de Dados": "Statistics for Data Science",
            "Mais detalhes...":"Show more...",
            "Um site de e-commerce para venda de celulares, com um catálogo diversificado e um carrinho de compras que permite aos usuários adicionar e remover produtos. A simulação de compras é integrada ao estoque, evitando compras de itens indisponíveis. Os usuários também podem deixar avaliações para os produtos. O painel administrativo possibilita o gerenciamento de pedidos, acompanhamento de vendas e geração de relatórios com gráficos.":
            "An e-commerce site for selling mobile phones with a diverse catalog and a shopping cart that allows users to add and remove products. The shopping simulation is integrated with the inventory, preventing purchases of unavailable items. Users can also leave reviews for products. The admin panel enables order management, sales tracking, and report generation with graphs.",
            "Esta API REST permite armazenar hotéis em sites individuais e vários sites dentro de um site principal, funcionando como uma ferramenta de busca para encontrar o melhor hotel.": 
                "This REST API enables storing hotels within individual sites and multiple sites within a main site, functioning as a search tool to find the best hotel.",
        },
    };
    

    let currentLanguage = 'en';

    function updateTranslations() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.innerText.trim();
            if (translations[currentLanguage][key]) {
                element.innerText = translations[currentLanguage][key];
            }
        });
    }

    englishButton.addEventListener('click', function () {
        currentLanguage = 'en';
        updateTranslations();
    });

    portugueseButton.addEventListener('click', function () {
        currentLanguage = 'pt';
        updateTranslations();
    });
    englishButton1.addEventListener('click', function () {
        currentLanguage = 'en';
        updateTranslations();
    });

    portugueseButton1.addEventListener('click', function () {
        currentLanguage = 'pt';
        updateTranslations();
    });

    updateTranslations();
});
