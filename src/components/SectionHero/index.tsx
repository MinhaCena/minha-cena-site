import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function SectionHero() {
	return (
		<section className={styles.sectionHero}>
			<div className={`${styles.sectionHeroContent} container`}>
				<Image
					className={styles.sectionHeroImage}
					src="/img/hero-image.png"
					width={580}
					height={580}
					alt="Logo Minha Cena"
				/>
				<div className={styles.sectionHeroDescription}>
					<Image
						className={styles.sectionHeroLogo}
						src="/img/logo-hero.png"
						width={440}
						height={60}
						alt="Logo Minha Cena"
					/>
					<h1 className={styles.sectionHeroTitle}>
						Aqui as <b className={styles.titleAccent}>histórias</b> de nossas
						crianças <b className={styles.titleByzantine}>ganham vida</b>
					</h1>
					<p className={styles.sectionHeroInfo}>
						Participe do projeto que conecta professores e ilustradores no
						intuito de transformar redações escritas pelos alunos em
						ilustrações.
					</p>
					<Link href="/">VENHA FAZER PARTE DE NOSSO PROJETO</Link>
				</div>
			</div>
		</section>
	)
}
