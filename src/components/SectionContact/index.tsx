import Image from 'next/image'
import InputField from '../UI/InputField'
import styles from './styles.module.scss'

export default function SectionContact() {
	return (
		<section id="proposta" className={styles.sectionContact}>
			<div className={`${styles.sectionContactContent} container`}>
				<h2 className={styles.sectionContactTitle}>
					Ficou com alguma dúvida? Fala com a gente!
				</h2>
			</div>
			<form action="" className={styles.sectionContactForm}>
				<InputField
					name="question"
					label="Seu e-mail*"
					type="email"
					placeholder="Digite seu e-mail"
					width="60.8"
					height="4.2"
					fontSizeLabel="2.4"
				/>
				<div className={styles.sectionContactFormTextArea}>
					<label className={styles.sectionContactFormLabel} htmlFor="question">
						Envie sua dúvida por aqui:
					</label>
					<textarea
						name="question"
						id="question"
						placeholder="Fale conosco enviando um e-mail com suas dúvidas. Estamos dispostos a respondê-las!"
					/>
					<button type="submit" className={styles.sectionContactButtonSubmit}>
						Enviar dúvida
						<Image src="/icons/send.svg" width={24} height={24} alt="enviar" />
					</button>
				</div>
			</form>
		</section>
	)
}
