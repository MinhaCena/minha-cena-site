import SectionAbout from '../components/SectionAbout'
import SectionContact from '../components/SectionContact'
import SectionHero from '../components/SectionHero'
import SectionMotivation from '../components/SectionMotivation'
import SectionPartners from '../components/SectionPartners'
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
			<SectionPartners />
			<SectionContact />
		</>
	)
}
