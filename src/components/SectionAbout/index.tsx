'use client'
import Image from 'next/image'
import ButtonLink from '../UI/ButtonLink'
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
					<ButtonLink
						label="Vem fazer a diferença com a gente"
						href="/"
						width="40rem"
						backgroundColor="#A84E97"
						backgroundColorHover="#662F5C"
					/>
				</div>
				<Image
					className={styles.sectionAboutImage}
					src="/img/about.png"
					width={500}
					height={500}
					alt="Logo Minha Cena"
				/>
			</div>
		</section>
	)
}
