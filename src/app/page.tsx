import SectionAbout from '../components/Sections/SectionAbout'
import SectionContact from '../components/Sections/SectionContact'
import SectionHero from '../components/Sections/SectionHero'
import SectionMotivation from '../components/Sections/SectionMotivation'
import SectionPartners from '../components/Sections/SectionPartners'
import SectionRecommend from '../components/Sections/SectionRecommend'
import SectionSubscribe from '../components/Sections/SectionSubscribe'

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
