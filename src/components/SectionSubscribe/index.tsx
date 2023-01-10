'use client'
import Image from 'next/image'
import ButtonLink from '../UI/ButtonLink'
import styles from './styles.module.scss'

export default function SectionSubscribe() {
	return (
		<section id="proposta" className={styles.sectionSubscribe}>
			<div className={`${styles.sectionSubscribeContent} container`}>
				<h2 className={styles.sectionSubscribeTitle}>
					Mas afinal,{' '}
					<b className={styles.sectionSubscribeTitleGradient}>
						como posso <br /> fazer parte desse projeto?
					</b>
				</h2>
				<div className={styles.sectionSubscribeAction}>
					<div className={styles.sectionSubscribeRoles}>
						<div className={styles.sectionSubscribeRoleIllustrator}>
							<div className={styles.sectionSubscribeRoleHeader}>
								<Image
									className={styles.sectionSubscribeRoleImage}
									src="/img/illustrator.png"
									alt="Minha Cena"
									width={442}
									height={150}
								/>
								<h3 className={styles.sectionSubscribeRoleSubtitle}>
									Ilustrador
								</h3>
							</div>
							<p
								className={`${styles.sectionSubscribeRoleDescription} ${styles.sectionSubscribeRoleDescriptionIllustrator} `}
							>
								Como ilustrador, você poderá contribuir adotando uma redação com
								intuito de dar vida a essa história com ilustrações incríveis,
								gerando também conteúdo para seu portfolio.
							</p>
							<div className={styles.sectionSubscribeRoleLink}>
								<ButtonLink
									label="Quero dar vida a essas histórias"
									href="/"
									backgroundColor="#A84E97"
									backgroundColorHover="#662F5C"
								/>
							</div>
						</div>
						<div className={styles.sectionSubscribeRoleTeacher}>
							<div className={styles.sectionSubscribeRoleHeader}>
								<Image
									className={styles.sectionSubscribeRoleImage}
									src="/img/teacher.png"
									alt="Minha Cena"
									width={442}
									height={150}
								/>
								<h3 className={styles.sectionSubscribeRoleSubtitle}>
									Professor
								</h3>
							</div>
							<p
								className={`${styles.sectionSubscribeRoleDescription} ${styles.sectionSubscribeRoleDescriptionTeacher} `}
							>
								Como professor, você poderá enviar redações elaboradas por seus
								alunos para que um ilustrador as desenhe, incentivando seus
								alunos lerem e escrever ainda mais.
							</p>
							<div className={styles.sectionSubscribeRoleLink}>
								<ButtonLink
									label="Quero publicar essas redações"
									href="/"
									backgroundColor="#470FF4"
									backgroundColorHover="#2D0999"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
