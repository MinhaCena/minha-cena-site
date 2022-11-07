import Lottie from 'react-lottie'
import animationData from '../../../public/lotties/comingsoon.json'
import styles from './styles.module.css'

export function LottieAnimation() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}
	return (
		<>
			<section className={styles.lottieAnimation}>
				<div className={`${styles.lottieAnimationContent} container`}>
					<span className={styles.soon}>Em Breve</span>
					<p className={styles.description}>
						Estamos preparando algo bem legal para você
					</p>
					<Lottie
						className={styles.lottie}
						options={defaultOptions}
						height={600}
						width={720}
					/>
				</div>
			</section>
		</>
	)
}
