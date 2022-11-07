import Image from 'next/image'
import styles from './styles.module.css'
import logo from '../../../public/img/logo.svg'

export function Header() {
	return (
		<header className={styles.header}>
			<div className={`${styles.headerContent} container`}>
				<Image src={logo} alt="Minha Cena" width={170} />
			</div>
		</header>
	)
}
