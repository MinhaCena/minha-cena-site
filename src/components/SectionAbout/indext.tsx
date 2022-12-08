import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function SectionAbout() {
	return (
		<section id="sobre-nos" className={styles.sectionAbout}>
			<div className={`${styles.sectionAboutContent} container`}>
				<div className={styles.sectionAboutDescription}>
					<h2 className={styles.sectionAboutTitle}>
						Sobre nosso <b className={styles.titleByzantine}>projeto</b>
					</h2>
					<p className={styles.sectionAboutInfo_1}>
						Somos um projeto <strong>sem fins lucrativos</strong> e de{' '}
						<strong>acesso gratuito</strong>. Conectamos,{' '}
						<strong>através de uma plataforma</strong>, profissionais da
						educação que{' '}
						<strong>enviam redações escritas por seus alunos</strong> à
						ilustradores voluntários que
						<strong> desenham essas histórias</strong> em formato de história em
						quadrinhos (HQ).
					</p>
					<p className={styles.sectionAboutInfo_2}>
						Nossa metodologia é baseada em <strong>gamificação</strong>, unindo
						ensino híbrido e tecnologia tornando os{' '}
						<strong>alunos protagonistas de seu aprendizado</strong>.
					</p>
					<span className={styles.sectionAboutGreeting}>
						Muito prazer, somos a{' '}
						<b className={styles.sectionAboutGreetingGradient}>
							MinhaCena.Org!
						</b>
					</span>
					<Link href="/">FAÇA A DIFERENÇA COM A GENTE</Link>
				</div>
				<Image
					className={styles.sectionAboutImage}
					src="/img/about-image.png"
					width={600}
					height={640}
					alt="Logo Minha Cena"
				/>
			</div>
		</section>
	)
}
