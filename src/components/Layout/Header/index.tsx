import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../../public/img/logo.svg'
import styles from './styles.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={`${styles.headerContent} container`}>
				<Image src={logo} alt="Minha Cena" width={170} />
				<nav className={styles.headerNav}>
					<a className={styles.headerNavLink} href="#apresentacao">
						Home
					</a>
					<a className={styles.headerNavLink} href="#sobre-nos">
						Sobre Nós
					</a>
					<a className={styles.headerNavLink} href="#proposta">
						Proposta
					</a>
					<a className={styles.headerNavLink} href="#como-fazer-parte">
						Como Fazer Parte?
					</a>
					<a className={styles.headerNavLink} href="#parceiros">
						Parceiros
					</a>
				</nav>
				<div className={styles.headerAction}>
					<Link className={styles.headerActionSubscribe} href="/">
						Quero na minha escola
						<svg
							width="16"
							height="16"
							viewBox="0 0 8 14"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0.292787 0.636536C0.105316 0.824064 0 1.07837 0 1.34354C0 1.6087 0.105316 1.86301 0.292787 2.05054L5.24279 7.00054L0.292787 11.9505C0.110629 12.1391 0.00983372 12.3917 0.0121121 12.6539C0.0143906 12.9161 0.11956 13.1669 0.304968 13.3524C0.490376 13.5378 0.741188 13.6429 1.00339 13.6452C1.26558 13.6475 1.51818 13.5467 1.70679 13.3645L7.36379 7.70754C7.55126 7.52001 7.65657 7.2657 7.65657 7.00054C7.65657 6.73537 7.55126 6.48106 7.36379 6.29354L1.70679 0.636536C1.51926 0.449065 1.26495 0.34375 0.999786 0.34375C0.734622 0.34375 0.480314 0.449065 0.292787 0.636536V0.636536Z" />
						</svg>
					</Link>

					<Link className={styles.headerActionLogin} href="/entrar">
						Login
						<svg
							width="16"
							height="16"
							viewBox="0 0 8 14"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0.292787 0.636536C0.105316 0.824064 0 1.07837 0 1.34354C0 1.6087 0.105316 1.86301 0.292787 2.05054L5.24279 7.00054L0.292787 11.9505C0.110629 12.1391 0.00983372 12.3917 0.0121121 12.6539C0.0143906 12.9161 0.11956 13.1669 0.304968 13.3524C0.490376 13.5378 0.741188 13.6429 1.00339 13.6452C1.26558 13.6475 1.51818 13.5467 1.70679 13.3645L7.36379 7.70754C7.55126 7.52001 7.65657 7.2657 7.65657 7.00054C7.65657 6.73537 7.55126 6.48106 7.36379 6.29354L1.70679 0.636536C1.51926 0.449065 1.26495 0.34375 0.999786 0.34375C0.734622 0.34375 0.480314 0.449065 0.292787 0.636536V0.636536Z" />
						</svg>
					</Link>
				</div>
			</div>
		</header>
	)
}
