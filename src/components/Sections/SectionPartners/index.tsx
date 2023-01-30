import Image from 'next/image'
import styles from './styles.module.scss'

export default function SectionPartners() {
	return (
		<section id="parceiros" className={styles.sectionPartners}>
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
						src="/img/partners/colabora.png"
						width={252}
						height={76}
						alt="Colabora"
					/>
					<Image
						className={styles.sectionPartnerLogo}
						src="/img/partners/expoFavela.svg"
						width={164}
						height={76}
						alt="Expo Favela"
					/>
					<Image
						className={styles.sectionPartnerLogo}
						src="/img/partners/idealist.svg"
						width={252}
						height={76}
						alt="Idealist"
					/>
				</div>
			</div>
		</section>
	)
}
