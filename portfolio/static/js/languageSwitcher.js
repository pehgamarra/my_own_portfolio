document.addEventListener('DOMContentLoaded', function () {
    const englishButton = document.getElementById('english-button');
    const portugueseButton = document.getElementById('portuguese-button');
    
    const translations = {
        pt: {
            "Home": "Início",
            "About": "Sobre",
            "Projects": "Projetos",
            "Certificates": "Certificados",
            "Skills": "Habilidades",
            "Contact": "Contato",
            "26 Years": "26 Anos",
            "Back-End Developer":"Desenvolvedor Back-End",
            "About Me": "Sobre Mim",
            "Download Resume": "Baixar Curriculo",
            "I am a dedicated back-end developer with a strong interest in the financial and technological markets. Passionate about artificial intelligence, I am also a keen self-learner, continuously seeking to expand my knowledge and skills in this dynamic field. My enthusiasm for technology drives me to explore new challenges and innovate in the ever-evolving landscape of programming.":
                "Sou um programador back-end dedicado com um forte interesse nos mercados financeiro e tecnológico. Apaixonado por inteligência artificial, sou também um aprendiz autodidata, buscando continuamente expandir meu conhecimento e habilidades neste campo dinâmico. Meu entusiasmo por tecnologia me motiva a buscar novos desafios e criar soluções inovadoras, acompanhando as mudanças constantes no mundo da programação",
            "Certificated Skills": "Cursos certificados",
            "Soft Skills":"Habilidades",
            "Programming Languages": "Linguagens de Programação",
            "Frameworks & Libraries": "Frameworks e Bibliotecas",
            "Development Principles": "Princípios de Desenvolvimento",
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
            "Contact Me": "Entre em Contato",
            "Check my Github": "Veja meu Github",
            "Send me a E-mail": "Envie-me um E-mail",
            "Text me on Whatsapp": "Mande-me uma mensagem no Whatsapp",
            "Call me on LinkedIn": "Chame-me no LinkedIn",
            "AI-Enhanced Productivity": "Produtividade Aprimorada por IA",
            "Translate":"Traduzir",
            "Html/ CSS/ JS": "Html/ CSS/ JS",
            "Power Bi": "Power Bi",
            "Django": "Django",
            "Flask": "Flask",
            "Git": "Git",
            "AWS": "AWS",
            "Docker": "Docker",
            "Object-Oriented Programming": "Programação Orientada a Objetos",
            "Design Patterns": "Padrões de Design",
            "Big O' Notation": "Notação Big O",
            "Clean Architecture": "Arquitetura Limpa",
            "Agile Methodology": "Metodologia Ágil",
            "Statistics for Data Science": "Estatísticas para Ciência de Dados",
            "Communication": "Comunicação",
            "Adaptability": "Adaptabilidade",
            "Creative Problem Solving": "Solução de Problemas",
            "Quick Self-Learner": "Aprendizado Rápido",
            "Attention to detail": "Atenção aos Detalhes",
            "AI-Enhanced Productivity": "Produtividade Aprimorada por IA",
            "Skills Acquired": "Habilidades adquiridas",
            "Data Science": "Ciência de Dados",
            "Design Patterns": "Padrões de Design",
            "Skills Acquired:": "Habilidades Adquiridas:",
            "Skill":"Habilidade",
            "View more": "Mais projetos",
            'Filter by Language & Framework': 'Filtrar por Linguagem & Framework',
            'All': 'Todos',
            'No projects found for the selected skill.': 'Nenhum projeto encontrado para a habilidade selecionada.',
            'Languages & Frameworks': 'Linguagens & Frameworks',
            'Show more': 'Mais detalhes',
            'GitHub Repository': 'Repositório GitHub'
        },
        
        en: {
            "Início": "Home",
            "Sobre": "About",
            "Projetos": "Projects",
            "Certificados": "Certificates",
            "Habilidades": "Skills",
            "Contato": "Contact",
            "26 Anos": "26 Years",
            "Desenvolvedor Back-End":"Back-End Developer",
            "Sobre Mim": "About Me",
            "Baixar Curriculo": "Download Resume",
            "Sou um programador back-end dedicado com um forte interesse nos mercados financeiro e tecnológico. Apaixonado por inteligência artificial, sou também um aprendiz autodidata, buscando continuamente expandir meu conhecimento e habilidades neste campo dinâmico. Meu entusiasmo por tecnologia me motiva a buscar novos desafios e criar soluções inovadoras, acompanhando as mudanças constantes no mundo da programação":
                "I am a dedicated back-end developer with a strong interest in the financial and technological markets. Passionate about artificial intelligence, I am also a keen self-learner, continuously seeking to expand my knowledge and skills in this dynamic field. My enthusiasm for technology drives me to explore new challenges and innovate in the ever-evolving landscape of programming.",
            "Cursos certificados": "Certificated Skills",
            "Habilidades":"Soft Skills",
            "Linguagens de Programação": "Programming Languages",
            "Frameworks e Bibliotecas": "Frameworks & Libraries",
            "Princípios de Desenvolvimento": "Development Principles",
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
            "Entre em Contato": "Contact Me",
            "Veja meu Github": "Check my Github",
            "Envie-me um E-mail": "Send me a E-mail",
            "Mande-me uma mensagem no Whatsapp": "Text me on Whatsapp",
            "Chame-me no LinkedIn": "Call me on LinkedIn",
            "Produtividade Aprimorada por IA": "AI-Enhanced Productivity",
            "Habilidades adquiridas": "Skills Acquired",
            "Traduzir":"Translate",
            "Html/ CSS/ JS": "Html/ CSS/ JS",
            "Power Bi": "Power Bi",
            "Django": "Django",
            "Flask": "Flask",
            "Git": "Git",
            "AWS": "AWS",
            "Docker": "Docker",
            "Programação Orientada a Objetos": "Object-Oriented Programming",
            "Padrões de Design": "Design Patterns",
            "Notação Big O": "Big O' Notation",
            "Arquitetura Limpa": "Clean Architecture",
            "Metodologia Ágil": "Agile Methodology",
            "Estatísticas para Ciência de Dados": "Statistics for Data Science",
            "Comunicação": "Communication",
            "Adaptabilidade": "Adaptability",
            "Solução de Problemas Criativos": "Creative Problem Solving",
            "Aprendizado Rápido Autodidata": "Quick Self-Learner",
            "Atenção aos Detalhes": "Attention to detail",
            "Produtividade Aprimorada por IA": "AI-Enhanced Productivity",
            "Ciencia de Dados": "Data Science",
            "Padrões de Design": "Design Patterns",
            "Habilidades Adquiridas:": "Skills Acquired:",
            "Habilidade":"Skill",
            "Mais projetos": "View more",
            'Filtrar por Linguagem & Framework': 'Filter by Language & Framework',
            'Todos': 'All',
            'Nenhum projeto encontrado para a habilidade selecionada': 'No projects found for the selected skill.',
            'Linguagens & Frameworks': 'Languages & Frameworks',
            "Mais detalhes": "Show more",
            "Repositório GitHub": "GitHub Repository"
        }
};
    

    let currentLanguage = 'en';

    function updateTranslations() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.innerText.trim();
            if (translations[currentLanguage][key]) {
                if (element.classList.contains('skill-item')) {
                    const skillName = element.querySelector('.skill-name');
                    if (skillName) {
                        skillName.textContent = translations[currentLanguage][key];
                    }
                } else {
                    element.innerHTML = translations[currentLanguage][key];
                }
            }
        });

        if (window.location.pathname.includes('/projects')) {
            document.querySelectorAll('.project-card').forEach(card => {
                const title = card.querySelector('.project-title');
                const description = card.querySelector('.project-description');

                if (currentLanguage === 'pt') {
                    title.textContent = title.getAttribute('data-title-pt') || title.textContent;
                    description.textContent = description.getAttribute('data-description-pt') || description.textContent;
                } else {
                    title.textContent = title.getAttribute('data-title-en') || title.textContent;
                    description.textContent = description.getAttribute('data-description-en') || description.textContent;
                }
            });
        }
    }

    englishButton.addEventListener('click', function () {
        currentLanguage = 'en';
        updateTranslations();
    });

    portugueseButton.addEventListener('click', function () {
        currentLanguage = 'pt';
        updateTranslations();
    });

    window.getCurrentLanguage = () => currentLanguage;
    window.switchLanguage = function(lang) {
        currentLanguage = lang;
        updateTranslations();
    };
});

