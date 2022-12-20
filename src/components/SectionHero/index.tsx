'use client'
import Image from 'next/image'
import ButtonLink from '../UI/ButtonLink'
import styles from './styles.module.scss'

export default function SectionHero() {
	return (
		<section className={styles.sectionHero}>
			<div className={`${styles.sectionHeroContent} container`}>
				<Image
					className={styles.sectionHeroImage}
					src="/img/hero.png"
					width={500}
					height={500}
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
						Aqui, as <b className={styles.titleAccent}>histórias</b> de nossas
						crianças <b className={styles.titleByzantine}>ganham vida</b>
					</h1>
					<p className={styles.sectionHeroInfo}>
						Participe do projeto que conecta{' '}
						<strong className={styles.infoAccentUtramarine}>professores</strong>{' '}
						a{' '}
						<strong className={styles.infoAccentByzantine}>ilustradores</strong>{' '}
						que
						<br /> transformam{' '}
						<strong className={styles.infoAccentUtramarine}>
							redações
						</strong>{' '}
						escritas por seus alunos em{' '}
						<strong className={styles.infoAccentByzantine}>ilustrações</strong>.
					</p>
					<ButtonLink
						label="Faça parte de nosso projeto clicando aqui"
						href="/"
						width="40rem"
						backgroundColor="linear-gradient(131.35deg, #C46D7F -21.82%, #7551E3 124.67%)"
						backgroundColorHover="linear-gradient(135deg, #662F5C 0%, #2D0999 100%)"
					/>
				</div>
			</div>
		</section>
	)
}
