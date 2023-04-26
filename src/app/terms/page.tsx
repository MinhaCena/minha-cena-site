import styles from './styles.module.scss'

export default function Page(){
    return(
        <>
            <header className={styles.navbar}>
                <img src="http://localhost:3000/img/terms/Vector.png" alt='logo'/>
                <form className={styles.search_box}>
                    <img src="http://localhost:3000/img/terms/tabler_search.png"/>
                    <input className={styles.search} type="search" placeholder="Pesquise dentro do termo..."/>
                </form>
            </header>

            <aside className={styles.sidebar}>

                <ul className={styles.sidebar_box}>
                    <img className={styles.sidebar_icon} src="http://localhost:3000/img/terms/arrow.png"/>
                    <a className={styles.sidebar_item} href="#">NOSSOS VALORES</a>

                    <img className={styles.sidebar_icon} src="http://localhost:3000/img/terms/arrow.png"/>
                    <a className={styles.sidebar_item} href="#">GRADUATE</a>

                    <img className={styles.sidebar_icon} src="http://localhost:3000/img/terms/arrow.png"/>
                    <a className={styles.sidebar_item} href="#">PERFIS</a>

                    <img className={styles.sidebar_icon} src="http://localhost:3000/img/terms/arrow.png"/>
                    <a className={styles.sidebar_item} href="#">LGPD</a>
                </ul>
            </aside>

            <div className={styles.content}>

                <div className={styles.content_box}>
                    <h1 className={styles.title_principal}>TERMO GERAL DE USO</h1>

                    <div className={styles.content_text}>
                        Seja muito bem vindo(a)!<br/>
                        O MinhaCena.Org é uma plataforma de 
                        engajamento social que conecta professores 
                        de escolas públicas e privadas a ilustradores 
                        profissionais ou não, afim de ilustrar redações, 
                        com interesse em realizar o trabalho voluntário e
                        se aproximar da causa social na educação. Atuamos 
                        fazendo pontes e compartilhando oportunidades de
                        engajamento, conteúdos e informações, com o 
                        objetivo de fortalecer e potencializar os 
                        trabalhos dos professores, ajudando assim, 
                        no desenvolvimento educacional dos alunos dentro do ensino híbrido, 
                        construindo uma educação mais humana e participativa, 
                        tornando o aluno protagonista no seu aprendizado.
                    </div>
            
                    <h2 className={styles.title}>1. Nossos valores:</h2>
            
                    <div className={styles.content_text}>
                        <p><b>SOMOS COMPROMETIDOS</b><br/>
                        Soluções comprometidas com transformações positivas.</p>
                        <br/>
                        <p><b>FAZEMOS ACONTECER</b><br/>
                        Colocar a mão na massa é o que faz nosso coração bater.</p>
                        <br/>
                        
                        <p><b>CUIDAMOS DAS RELAÇÕES</b><br/>
                        Praticamos a empatia, qualidade e respeito no nosso dia a dia.</p>
                        <br/>

                        <p><b>SOMOS CRIATIVOS</b><br/>
                        Adoramos desafios e co-criamos projetos inovadores para o ensino híbrido.</p>
                        <br/>

                        <p><b>FAZEMOS JUNTOS</b><br/>
                        Acreditamos no poder da nossa rede.
                        </p>
                        <br/>

                        <b>SOMOS PLURAIS</b><br/>
                        Acreditamos que as diferenças nos tornam mais fortes.
                    </div>
            
                    <h2 className={styles.title}>2. Nossa plataforma é gratuita para todos os usuários:</h2>

                    <div className={styles.content_text}>
            
                        <p>(i) para as escolas e professores a partir de seus projetos de redação, e</p><br/>
            
                        <p>(ii) para ilustradores, candidatos a voluntários que buscam oportunidades de engajamento, a partir de redações 
                            publicadas na dashboard da plataforma. O trabalho voluntário é realizado à distância via web.
                        </p><br/>
                        
                        <p>Somos uma plataforma de conexão e realizamos a curadoria dos perfis, redações e ilustrações. 
                            Assim, todo o processo para início da atividade, desde o primeiro contato com o(a) voluntário(s) 
                            até a conclusão de cadastro.
                        </p><br/>
                        
                        <h3>2.1. Responsabilidades MinhaCena.Org:</h3><br/>
                        
                        <p>• Acompanhamento do processo das inscrições;<br/>
                        • Curadoria dos perfis de escolas/professores e ilustradores voluntários;<br/>
                        • Atendimento e suporte para voluntários;<br/>
                        • Divulgação de vagas através de Newsletter, redes sociais e outros canais de comunicação.</p>
                        
                        <h3>2.2. Responsabilidades Escolas:</h3><br/>
                        
                        <p>• Orientar pais de alunos sobre o voluntariado das atividades na plataforma;</p>
                        
                        <h3><p>2.3. Responsabilidades ilustradores voluntários(as):</p></h3>
                        
                        • Manter os dados de contato atualizados;<br/>
                        • Responder, ilustrar e ser comprometido no trabalho voluntário;<br/>
                        • Atenção e cuidado no formato e linguagem da ilustração.
                    </div>
            
                    <h2 className={styles.title}>3. Perfis:</h2>
            
                    <div className={styles.content_text}>Conforme informado acima, todos os perfis e vagas de voluntariado no site 
                        passam por aprovação prévia, e observamos os seguintes critérios:
                        <br/>
                        <h3><p>3.1. Perfis dos Ilustradores:<br/></p></h3>
                        
                        <p>Nossa plataforma é aberta para que ilustradores profissionais ou estudantes da área, 
                        mostrem seu trabalho disponibilizado de forma gratuita e voluntaria para propósito social e pedagógico. 
                        Contudo, é necessário qualidade e sinergia com a causa social do projeto.<br/></p>
                        
                        <p>Disponibilizamos login de acesso gratuito a dashboard em nosso site (www.minhacena.org) para perfis 
                        de ilustradores voluntários que completarem o cadastro com as seguintes informações:<br/></p>
                        
                        <ul>• Portfólio</ul>
                        <ul>• Qual o público atendido;</ul>
                        <ul>• Informações para contato;</ul>
                        <ul>• Qual a disponibilidade que os(as) voluntários(as) devem ter para a ação.</ul>
                        
                        <p>Destacamos que não serão publicadas ilustrações: (i) com viés ou ligadas a movimentos políticos, (ii) 
                        que tenham a finalidade de evangelização, (iii) que violem direitos humanos, ambientais, e a diversidade 
                        de gênero e racial, ou ainda (iv) que realizem algum tipo de atividade que contradiz com o propósito e valores 
                        do MinhaCena.Org.<br/></p>
                        
                        <h3>3.2. Perfis das Escolas:</h3>
                        
                        <p>Disponibilizamos 1 (um) login de acesso gratuito a dashboard em nosso site (www.minhacena.org) 
                        para escolas e instituições de ensino que se cadastrarem, podendo aderir professores dos currículos 
                        Português e Artes. As informações no cadastro precisam estar completas e bem descritas com todas as 
                        informações solicitadas no momento da inscrição.<br/></p>
                        
                        <h4>3.2.1. Informações relevantes para inserção da escola na plataforma;</h4>
                        
                        <ul>• Se o segmento é público, privada ou ONG;</ul>
                        <ul>• Qual a importância dessa atividade na escola;</ul>
                        <ul>• Dados dos Professores voluntários responsáveis pelo login</ul>
                        
                        <h4>3.2.2. Regras gerais para aprovação;<br/></h4>
                        
                        <ul>• Não aprovamos no site, perfis de escolas, professores ou ilustradores que tenham finalidade de 
                        evangelização, mesmo que seja atividade secundária;</ul>

                        <ul>• O MinhaCena.Org se reserva no direito da exclusão de perfis de ilustradores aprovados, que reiteradamente, 
                        deixam de responder as redações publicadas na dashboard pelos professores.</ul>
                        
                        <h4>3.2.3. Sobre direitos autorais;<br/></h4>
                        
                        <p>Todas as redações serão ilustradas para fins não comerciais e de forma voluntária pelos ilustradores 
                        cadastrados na plataforma, cientes de que suas ilustrações são resultado de uma parceria coletiva com professor 
                        e aluno autor da redação, que sob supervisão do professor, está aplicando o texto para atividade pedagógica/escolar.
                        O resultado da atividade é possibilitado pela plataforma MinhaCena.Org e se categoriza como obra coletiva,
                        conforme lei 9.610/98, no art. 5º, alínea h: “coletiva - a criada por iniciativa, 
                        organização e responsabilidade de uma pessoa física ou jurídica, que a publica sob seu nome ou marca 
                        e que é constituída pela participação de diferentes autores, 
                        cujas contribuições se fundem numa criação autônoma”.</p>
                        
                        <p>Todas as ilustrações devem levar o nome de seus respectivos autores alunos e ilustradores.</p>
                        
                        Informamos que, o MinhaCena.Org poderá bloquear usuários que não observarem o disposto neste termo de uso.
                    </div>
            
                    <h2 className={styles.title}>4. Lei Geral de Proteção de Dados:</h2>
            
                    <div className={styles.content_text}><p>Por fim, em cumprimento ao disposto na Lei n.º 13.709/18, 
                     mais conhecida como Lei Geral de Proteção de Dados - LGPD, 
                     que estabelece novas regras para o tratamento de dados pessoais por 
                     pessoas físicas e empresas, públicas e privadas, ratificamos os dados que serão tratados 
                     através da nossa plataforma:</p>
            
                        <ul>• Dados pessoais: nome, e-mail, telefone, data de nascimento, gênero;</ul>
                        <ul>• Causas de interesse;</ul>
                        <ul>• Habilidades pessoais;</ul>
                        
                        <p>Todos os dados disponibilizados pelos usuários no momento do cadastro no nosso site, 
                        mediante expressa autorização, serão tratados única e exclusivamente para permitir a 
                        conexão entre professores a ilustradores voluntários.</p>
                        
                        <p>Em linhas gerais, a LGPD busca garantir maior segurança, 
                        privacidade e transparência ao uso dos dados pessoais e evitar que eles sejam expostos 
                        à perda, deterioração, acesso indevido, ou, ainda, utilizados para finalidades diferentes 
                        daquelas para as quais uma pessoa concordou em dividir seus dados.</p>
                        
                        <p>Para garantir a transparência da relação mantida com você e todos nossos parceiros, a MinhaCena.Org disponibiliza, 
                            em sua Plataforma, o Aviso de Privacidade aos seus usuários. Nele, podem ser encontrados os dados pessoais tratados
                            pela MinhaCena.Org e as finalidades a que se destinam, além da descrição dos direitos dos titulares e o canal de comunicação
                            para o exercício desses direitos.
                        </p><br/>
                        
                        <strong>Equipe MinhaCena.Org</strong>
                    </div>
                </div>
            </div>
        </>
    )
}