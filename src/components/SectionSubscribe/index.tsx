'use client'
import Link from 'next/link'
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
						<div className={styles.sectionSubscribeIllustrator}>
							<h3 className={styles.sectionSubscribeSubtitleIllustrator}>
								Ilustrador
							</h3>
							<p className={styles.sectionSubscribeRoleDescription}>
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
						<div className={styles.sectionSubscribeTeacher}>
							<h3 className={styles.sectionSubscribeSubtitleTeacher}>
								Professor
							</h3>
							<p className={styles.sectionSubscribeRoleDescription}>
								Como professor, você poderá enviar as redações de seus alunos
								para que um ilustrador possa desenhar essas histórias,
								incentivando seus alunos a ler e escrever ainda mais.
							</p>
							<div className={styles.sectionSubscribeRoleLink}>
								<ButtonLink
									label="Quero publicar redações de meus alunos"
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
