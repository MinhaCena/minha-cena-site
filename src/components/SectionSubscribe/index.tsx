import Link from 'next/link'
import styles from './styles.module.scss'

export default function SectionSubscribe() {
	return (
		<section id="proposta" className={styles.sectionSubscribe}>
			<div className={`${styles.sectionSubscribeContent} container`}>
				<h2 className={styles.sectionSubscribeTitle}>
					Como posso fazer parte?
				</h2>
				<div className={styles.sectionSubscribeAction}>
					<div className={styles.sectionSubscribeRoles}>
						<div className={styles.sectionSubscribeIllustrator}>
							<h3 className={styles.sectionSubscribeSubtitle}>Ilustrador</h3>
							<p className={styles.sectionSubscribeRoleDescription}>
								Como ilustrador, você poderá contribuir adotando uma redação com
								intuito de dar vida a essa história com ilustrações incríveis,
								gerando também conteúdo para seu portfolio.
							</p>
						</div>
						<div className={styles.sectionSubscribeTeacher}>
							<h3 className={styles.sectionSubscribeSubtitle}>Professor</h3>
							<p className={styles.sectionSubscribeRoleDescription}>
								Como professor, você poderá enviar as redações de seus alunos
								para que um ilustrador possa desenhar essas histórias,
								incentivando seus alunos a ler e escrever ainda mais.
							</p>
						</div>
					</div>
					<div className={styles.sectionSubscribeLinks}>
						<Link href="/">QUERO DAR VIDA A ESSAS HISTÓRIAS</Link>
						<Link href="/">QUERO PUBLICAR MINHAS REDAÇÕES</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
