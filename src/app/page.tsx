//import Blob from '../../public/shapes/blob.svg'

import SectionAbout from '../components/SectionAbout/indext'
import SectionHero from '../components/SectionHero'
import SectionMotivation from '../components/SectionMotivation'
import SectionRecommend from '../components/SectionRecommend'
import SectionSubscribe from '../components/SectionSubscribe'

export default function Page() {
	return (
		<>
			<SectionHero />
			<SectionAbout />
			<SectionMotivation />
			<SectionSubscribe />
			<SectionRecommend />
		</>
	)
}
