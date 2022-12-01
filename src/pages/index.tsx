import type { NextPage } from 'next'
import { Footer } from '../components/Footer'
import { LottieAnimation } from '../components/LottieAnimation'
//import Blob from '../../public/shapes/blob.svg'

import styles from '../styles/pages/home.module.scss'

const Home: NextPage = () => {
	return (
		<div className={styles.home}>
			<LottieAnimation />
			{/* 	<svg
				viewBox="0 0 1312 170"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1366 130C1366 130 1026.5 218.5 682.999 130C339.499 41.5 -0.00109863 130 -0.00109863 130V0C104.669 0.000443371 1366 0 1366 0C1366 81.2925 1366 130 1366 130Z"
					fill="#C669B5"
				/>
			</svg> */}
			<Footer />
		</div>
	)
}

export default Home
