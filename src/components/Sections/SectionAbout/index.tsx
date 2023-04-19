'use client'
import Image from 'next/image'
import ButtonLink from '../../ButtonLink'
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
						Somos um projeto{' '}
						<strong className={styles.infoGradient}>sem fins lucrativos</strong>{' '}
						e de{' '}
						<strong className={styles.infoGradient}>acesso gratuito</strong>.
						Conectamos,{' '}
						<strong className={styles.infoGradient}>
							através de uma plataforma
						</strong>
						, profissionais da educação que{' '}
						<strong className={styles.infoGradient}>
							enviam redações escritas por seus alunos
						</strong>{' '}
						à ilustradores voluntários que
						<strong className={styles.infoGradient}>
							{' '}
							desenham essas histórias
						</strong>{' '}
						em formato de história em quadrinhos (HQ).
					</p>
					<p className={styles.sectionAboutInfo_2}>
						Nossa metodologia é baseada em{' '}
						<strong className={styles.infoGradient}>gamificação</strong>, unindo
						ensino híbrido e tecnologia tornando os{' '}
						<strong className={styles.infoGradient}>
							alunos protagonistas de seu aprendizado
						</strong>
						.
					</p>
					<span className={styles.sectionAboutGreeting}>
						Muito prazer, somos a{' '}
						<b className={styles.sectionAboutGreetingGradient}>
							MinhaCena.Org!
						</b>
					</span>
					<ButtonLink
						label="Vem fazer a diferença com a gente"
						href="/"
						maxWidth="40rem"
						backgroundColor="linear-gradient(131.35deg, #C46D7F -21.82%, #7551E3 124.67%)"
						backgroundColorHover="linear-gradient(135deg, #662F5C 0%, #2D0999 100%)"
					/>
				</div>
				<div className={styles.sectionAboutAnimation}>
					<Image
						className={styles.sectionAboutImage}
						src="/img/about.png"
						width={500}
						height={500}
						alt="Logo Minha Cena"
					/>
				</div>
			</div>
		</section>
	)
}
