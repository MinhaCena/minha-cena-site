import InputField from '../UI/InputField'
import styles from './styles.module.scss'

export default function SectionRecommend() {
	return (
		<section id="proposta" className={styles.sectionRecommend}>
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
				<form action="" className={styles.sectionRecommendForm}>
					<InputField
						name="escola"
						label="Nome da Escola*"
						type="text"
						placeholder="Digite o nome de sua escola"
					/>

					<InputField
						name="email"
						label="Email Institucional da Escola*"
						type="text"
						placeholder="Digite o email de sua escola"
					/>
					<div className={styles.sectionRecommendFormAddress}>
						<InputField
							name="cidade"
							label="Cidade*"
							type="text"
							placeholder="Digite a cidade de sua escola"
							width="32"
						/>
						<InputField
							name="estado"
							label="UF*"
							type="text"
							placeholder="UF"
							width="6.4"
						/>
					</div>
					<InputField
						name="nome"
						label="Qual o nome de quem está indicando?"
						type="text"
						placeholder="Digite seu nome se sentir confortável"
					/>
					<label
						className={styles.sectionRecommendFormFunctionLabel}
						htmlFor="funcao"
					>
						Se tiver, qual sua função na escola?*
					</label>
					<select
						className={styles.sectionRecommendFormFunctionSelect}
						name="funcao"
						id="funcao"
					>
						<option value="">Selecione uma das opções</option>
						<option value="aluno(a)">Aluno(a)</option>
						<option value="professor(a)">Professor(a)</option>
						<option value="coordebador(a)pedagogico(a)">
							Coordebador(a) Pedagógico(a)
						</option>
						<option value="cargoadministrativo">Cargo administrativo</option>
						<option value="secretariadeeducacao">
							Trabalha em uma Secretaria de Educação
						</option>
						<option value="outros">Outros</option>
					</select>
				</form>
			</div>
		</section>
	)
}
