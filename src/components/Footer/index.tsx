import Image from 'next/image'
import { RxInstagramLogo, RxLinkedinLogo } from 'react-icons/rx'
import styles from './styles.module.scss'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footerContent} container`}>
				<Image
					src="/img/logo-footer-icon.svg"
					width={64}
					height={64}
					alt="Logo Minha Cena"
				/>
				<Image
					src="/img/logo-footer.svg"
					width={200}
					height={32}
					alt="Logo Minha Cena"
				/>
				<span className={styles.footerCopyright}>
					© 2022 Todos os direitos reservados.
				</span>
				<div className={styles.footerSocialMedia}>
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
		</footer>
	)
}
