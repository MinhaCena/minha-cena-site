import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function SectionMotivation() {
	return (
		<section id="proposta" className={styles.sectionMotivation}>
			<div className={`${styles.sectionMotivationContent_1} container`}>
				<h2 className={styles.sectionMotivationTitle}>
					Nossa proposta é ser uma ferramenta de{' '}
					<b className={styles.titleUltramarine}>impacto social</b>
				</h2>
			</div>
			<svg
				viewBox="0 0 1366 120"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="Background / Blob"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0.000230045 36.0039C0.000230045 36.0039 339.5 -45.0049 683 36.0039C1026.5 117.013 1366 36.0039 1366 36.0039V155C1261.33 155 0.000139813 155 0.000139813 155C-0.000220798 80.5886 0.000230045 36.0039 0.000230045 36.0039Z"
					fill="#8391f8"
				/>
			</svg>
			<div className={styles.sectionMotivationGoals}>
				<div className={`${styles.sectionMotivationContent_2} container`}>
					<div className={styles.sectionMotivationGoalsContent}>
						<div
							className={`${styles.sectionMotivationGoal} ${styles.sectionMotivationGoal_1} `}
						>
							<div className={styles.sectionMotivationGoalHeader}>
								<Image
									className={styles.sectionHeroLogo}
									src="/icons/reading.svg"
									width={60}
									height={60}
									alt="Icone azul e amarelo representando pessoa lendo"
								/>
								<h3 className={styles.sectionMotivationGoalSubtitle}>
									Desenvolvimento educacional
								</h3>
							</div>

							<p
								className={`${styles.sectionMotivationGoalDescription} ${styles.sectionMotivationGoalDescription_1}`}
							>
								Melhorar a escrita, leitura e interpretação de texto dos alunos
								de escolas públicas, privadas ou ONGs de contraturno escolar.
							</p>
						</div>
						<div
							className={`${styles.sectionMotivationGoal} ${styles.sectionMotivationGoal_2} `}
						>
							<div className={styles.sectionMotivationGoalHeader}>
								<Image
									className={styles.sectionHeroLogo}
									src="/icons/idea-color.svg"
									width={60}
									height={60}
									alt="Icone de lâmpada representando idea"
								/>
								<h3 className={styles.sectionMotivationGoalSubtitle}>
									Incentivo criativo
								</h3>
							</div>
							<p
								className={`${styles.sectionMotivationGoalDescription} ${styles.sectionMotivationGoalDescription_2}`}
							>
								Incentivar a cultura e produção de arte de nossos estudantes
								através de ilustrações em história em quadrinhos (HQ).
							</p>
						</div>
						<div
							className={`${styles.sectionMotivationGoal} ${styles.sectionMotivationGoal_2} `}
						>
							<div className={styles.sectionMotivationGoalHeader}>
								<Image
									className={styles.sectionHeroLogo}
									src="/icons/talking.svg"
									width={60}
									height={60}
									alt="Icone representando pessoas conversando"
								/>
								<h3 className={styles.sectionMotivationGoalSubtitle}>
									Conectividade e Networking
								</h3>
							</div>

							<p
								className={`${styles.sectionMotivationGoalDescription} ${styles.sectionMotivationGoalDescription_3}`}
							>
								Trazer visibilidade aos artistas voluntários e dar suporte
								pedagógico aos docentes em seus projetos educacionais.
							</p>
						</div>
					</div>
					<Link href="/">FAÇA A DIFERENÇA COM A GENTE</Link>
				</div>
			</div>
		</section>
	)
}
