import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function SectionPartners() {
	return (
		<section id="sobre-nos" className={styles.sectionPartners}>
			<div className={`${styles.sectionPartnersContent} container`}>
				<h2 className={styles.sectionPartnersTitle}>
					Parceiros que{' '}
					<b className={styles.titleGradient}>transformam a educação</b>
				</h2>
				<div className={styles.sectionPartnersList}>
					<Image
						className={`${styles.sectionPartnerLogo} ${styles.sectionPartnerLogoAiesec}`}
						src="/img/partners/aiesec.svg"
						width={325}
						height={46}
						alt="AIESEC"
					/>
					<Image
						className={styles.sectionPartnerLogo}
						src="/img/partners/boticario.svg"
						width={160}
						height={93}
						alt="Grupo Boticário"
					/>
					<Image
						className={styles.sectionPartnerLogo}
						src="/img/partners/pipa.svg"
						width={115}
						height={139}
						alt="PIPA"
					/>
					<Image
						className={styles.sectionPartnerLogo}
						src="/img/partners/atados.svg"
						width={216}
						height={93}
						alt="Atados"
					/>
					<Image
						className={styles.sectionPartnerLogo}
						src="/img/partners/expoFavela.svg"
						width={164}
						height={76}
						alt="Expo Favela"
					/>
				</div>
			</div>
		</section>
	)
}
