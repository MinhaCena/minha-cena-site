import Image from 'next/image'
import Link from 'next/link'
import { RxInstagramLogo, RxLinkedinLogo } from 'react-icons/rx'
import InputField from '../../InputField'
import styles from './styles.module.scss'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footerContent} container`}>
				<div className={styles.footerMainContent}>
					<div className={styles.footerTop}>
						<div className={styles.footerLogo}>
							<Image
								className={styles.footerLogoIcon}
								src="/img/logo-footer-icon.svg"
								width={32}
								height={36}
								alt="Logo Minha Cena"
							/>
							<Image
								src="/img/logo-footer.svg"
								width={252}
								height={36}
								alt="Logo Minha Cena"
							/>
						</div>
						<div className={styles.footerNewsletter}>
							<strong className={styles.footerNewsletterTitle}>
								Inscreva-se em nossa Newsletter!
							</strong>
							<form action="" className={styles.footerNewsletterForm}>
								<div className={styles.footerNewsletterFormInput}>
									<InputField
										name="question"
										label="Fique por dentro das novidades!"
										type="email"
										placeholder="Digite seu e-mail"
										width="19.0"
										height="2.8"
										fontSizeInput="1.2"
										fontSizeLabel="1.2"
										fontColorLabel="#FEFEFE"
										fontWeightLabel="600"
										marginInputGroup="0"
									/>
								</div>
								<button
									type="submit"
									className={styles.footerNewsletterButtonSubmit}
								>
									Enviar
									<Image
										src="/icons/send.svg"
										width={16}
										height={16}
										alt="enviar"
									/>
								</button>
							</form>
						</div>
						<div className={styles.footerUtils}>
							<div className={styles.footerSocialMedia}>
								<span className={styles.footerUtilsType}>Redes Sociais</span>
								<div className={styles.footerLogoIcons}>
									<a
										href="https://www.instagram.com/projetominhacena/"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Instagram do Minha Cena"
										className={styles.instagram}
									>
										<RxInstagramLogo className={styles.instagramIcon} />
									</a>
									<a
										href="https://br.linkedin.com/company/minhacena-org"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Linkedin do Minha Cena"
										className={styles.linkedin}
									>
										<RxLinkedinLogo className={styles.linkedinIcon} />
									</a>
								</div>
							</div>
							<div className={styles.footerLinks}>
								<span className={styles.footerUtilsType}>Links</span>
								<Link href="/ ">Termos de uso</Link>
							</div>
						</div>
					</div>
					<div className={styles.footerTeam}>
						<div className={styles.footerTeamColumn}>
							<strong className={styles.footerTeamRole}>Fundador</strong>
							<Link
								href="/"
								className={`${styles.footerTeamMember} ${styles.footerTeamMemberName}`}
							>
								Eliezer Manoel
							</Link>
							<strong className={styles.footerTeamRole}>
								Equipe de Desenvolvimento
							</strong>
							<Link href="/" className={styles.footerTeamMember}>
								Ana Laura | Front-End Developer
							</Link>
							<Link href="/" className={styles.footerTeamMember}>
								Adrian Oliveira | Front-End Developer
							</Link>
							<Link href="/" className={styles.footerTeamMember}>
								Beny Allan | Back-End Developer
							</Link>
							<Link href="/" className={styles.footerTeamMember}>
								Fernando Carvalho | Back-End Developer
							</Link>
						</div>
						<div className={styles.footerTeamColumn}>
							<strong className={styles.footerTeamRole}>
								Equipe de Design
							</strong>
							<Link href="/" className={styles.footerTeamMember}>
								Gustavo Latrova | Design Lead
							</Link>
							<Link href="/" className={styles.footerTeamMember}>
								Akira Takahashi | Diretor de Arte
							</Link>
							<Link href="/" className={styles.footerTeamMember}>
								Thiago Tabosa | UX Designer
							</Link>
							<Link href="/" className={styles.footerTeamMember}>
								Murilo Fernandes | UI Design
							</Link>
							<Link href="/" className={styles.footerTeamMember}>
								Victor Ambrosano | UI Designer
							</Link>
							<Link href="/" className={styles.footerTeamMember}>
								Mateus Friedein | UI Designer
							</Link>
						</div>
					</div>
				</div>

				<div className={styles.footerBottom}>
					<span className={styles.footerCopyright}>
						MinhaCena.org © 2023 <br /> Todos os direitos reservados.
					</span>
					<button
						className={styles.footerButtonUp}
						type="button"
						aria-label="Subir até o topo da página"
					>
						<Image
							src="/icons/arrow-up.svg"
							width={16}
							height={16}
							alt="enviar"
						/>
					</button>
				</div>
			</div>
		</footer>
	)
}
