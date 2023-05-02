'use client'

import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import ButtonLink from '../../ButtonLink'
import InputField from '../../InputField'
import SelectField from '../../Select'
import styles from './styles.module.scss'

interface IFormValues {
	institutionName: string
	institutionEmail: string
	institutionCity: string
	institutionState: string
	recommendedBy: string
	roleAtInstitution: { label: string; value: number }
}

const formSchema = z.object({
	institutionName: z
		.string({ required_error: 'Por favor, informe o nome da escola' })
		.nonempty('Por favor, informe o nome da escola')
		.min(3, { message: 'O nome da escola precisa ter no mínimo 3 caracteres' })
		.max(50),
	institutionEmail: z
		.string({ required_error: 'Por favor, informe o email da escola' })
		.email({ message: 'Endereço de email inválido' })
		.toLowerCase(),
	institutionCity: z
		.string({ required_error: 'Por favor, informe a cidade da escola' })
		.nonempty('Por favor, informe a cidade da escola')
		.max(50),
	institutionState: z
		.string({ required_error: 'Por favor, a UF da escola' })
		.nonempty('Por favor, informe a UF da escola')
		.max(2)
		.toUpperCase(),
	recommendedBy: z.string().max(50).optional(),
	roleAtInstitution: z
		.object({
			label: z.string(),
			value: z.number(),
		})
		.refine((data) => data.value != 0, {
			message: 'Por favor, selecione uma das opções',
		}),
})

export default function SectionRecommend() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			institutionName: '',
			institutionEmail: '',
			institutionCity: '',
			institutionState: '',
			recommendedBy: '',
			roleAtInstitution: { label: 'Selecione uma das opções', value: 0 },
		},
		resolver: zodResolver(formSchema),
	})

	const onSubmit: SubmitHandler<IFormValues> = (data) => {
		console.log(data)
	}
	return (
		<section id="recomende" className={styles.sectionRecommend}>
			<svg
				viewBox="0 0 1366 170"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1366 130C1366 130 1026.5 218.5 682.999 130C339.499 41.5 -0.00109863 130 -0.00109863 130V0C104.669 0.000443371 1366 0 1366 0C1366 81.2925 1366 130 1366 130Z"
					fill="#C669B5"
				/>
			</svg>
			<div className={`${styles.sectionRecommendContent} container`}>
				<div className={styles.sectionRecommendDescription}>
					<h2 className={styles.sectionRecommendTitle}>
						Quer que sua escola participe desse projeto?
						<br />
						<b className={styles.titleGradient}>Indique!</b>
					</h2>
					<h3 className={styles.sectionRecommendSubtitle}>
						Sua escola a um passo de incentivar as crianças a serem
						protagonistas de seu aprendizado!
					</h3>
				</div>
				<form
					action=""
					className={styles.sectionRecommendForm}
					onSubmit={handleSubmit(onSubmit)}
				>
					<div>
						<Controller
							name="institutionName"
							control={control}
							render={({ field }) => (
								<InputField
									label="Nome da Escola*"
									type="text"
									placeholder="Digite o nome de sua escola"
									{...field}
								/>
							)}
						/>
						<ErrorMessage
							errors={errors}
							name="institutionName"
							render={({ message }) => (
								<span className={styles.messageError}>{message}</span>
							)}
						/>
					</div>

					<div>
						<Controller
							name="institutionEmail"
							control={control}
							render={({ field }) => (
								<InputField
									label="Email Institucional da Escola*"
									type="text"
									placeholder="Digite o email de sua escola"
									{...field}
								/>
							)}
						/>
						<ErrorMessage
							errors={errors}
							name="institutionEmail"
							render={({ message }) => (
								<span className={styles.messageError}>{message}</span>
							)}
						/>
					</div>

					<div className={styles.sectionRecommendFormAddress}>
						<div className={styles.sectionRecommendFormAddressCity}>
							<Controller
								name="institutionCity"
								control={control}
								render={({ field }) => (
									<InputField
										label="Cidade*"
										type="text"
										placeholder="Digite a cidade de sua escola"
										{...field}
									/>
								)}
							/>
							<ErrorMessage
								errors={errors}
								name="institutionCity"
								render={({ message }) => (
									<span className={styles.messageError}>{message}</span>
								)}
							/>
						</div>
						<div>
							<Controller
								name="institutionState"
								control={control}
								render={({ field }) => (
									<InputField
										label="UF*"
										type="text"
										placeholder="UF"
										maxWidth="6.4"
										{...field}
									/>
								)}
							/>
							<ErrorMessage
								errors={errors}
								name="institutionState"
								render={({ message }) => (
									<span className={styles.messageError}>{message}</span>
								)}
							/>
						</div>
					</div>
					<Controller
						name="recommendedBy"
						control={control}
						render={({ field }) => (
							<InputField
								label="Qual o nome de quem está indicando?"
								type="text"
								placeholder="Digite seu nome se sentir confortável"
								{...field}
							/>
						)}
					/>
					<div>
						<Controller
							name="roleAtInstitution"
							control={control}
							render={({ field: { onChange, value } }) => (
								<SelectField
									label="Se tiver, qual sua função na escola?*"
									onChange={onChange}
									value={value}
									options={[
										{
											value: 0,
											label: 'Selecione uma das opções',
										},
										{ value: 1, label: 'Aluno(a)' },
										{ value: 2, label: 'Professor(a)' },
										{
											value: 3,
											label: 'Coordenador(a) Pedagógico(a)',
										},
										{
											value: 4,
											label: 'Cargo administrativo',
										},
										{
											value: 5,
											label: 'Trabalha em uma Secretaria de Educação',
										},
										{
											value: 6,
											label: 'Outros',
										},
									]}
								/>
							)}
						/>
						<ErrorMessage
							errors={errors}
							name="roleAtInstitution"
							render={({ message }) => (
								<span className={styles.messageError}>{message}</span>
							)}
						/>
					</div>

					<ButtonLink
						href="/"
						label="Indicar o projeto para minha escola!"
						isButton={true}
						type="submit"
						margin="1.6rem"
						backgroundColor="linear-gradient(131.35deg, #C46D7F -21.82%, #7551E3 124.67%)"
						backgroundColorHover="linear-gradient(135deg, #662F5C 0%, #2D0999 100%)"
					/>
				</form>
			</div>
		</section>
	)
}
