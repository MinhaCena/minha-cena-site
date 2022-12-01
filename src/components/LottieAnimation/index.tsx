import { Player } from '@lottiefiles/react-lottie-player'
import animationData from '../../../public/lotties/comingsoon.json'
import styles from './styles.module.css'

export function LottieAnimation() {
	return (
		<>
			<section className={styles.lottieAnimation}>
				<div className={`${styles.lottieAnimationContent} container`}>
					<span className={styles.soon}>Em Breve</span>
					<p className={styles.description}>
						Estamos preparando algo bem legal para você
					</p>
					<Player className={styles.lottie} src={animationData} loop autoplay />
				</div>
			</section>
		</>
	)
}
