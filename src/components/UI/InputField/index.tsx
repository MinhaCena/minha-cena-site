import { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	label: string
	width?: string
	height?: string
	marginInputGroup?: string
	fontSizeInput?: string
	fontSizeLabel?: string
	fontColorLabel?: string
	fontWeightLabel?: string
}

const InputField: FC<InputProps> = ({
	name,
	label,
	width,
	height,
	marginInputGroup,
	fontSizeInput,
	fontSizeLabel,
	fontColorLabel,
	fontWeightLabel,
	...rest
}) => {
	return (
		<div
			className={styles.inputFieldGroup}
			style={{
				marginTop: `${marginInputGroup}`,
			}}
		>
			<label
				style={{
					fontSize: `${fontSizeLabel}rem`,
					color: `${fontColorLabel}`,
					fontWeight: `${fontWeightLabel}`,
				}}
				className={styles.inputFieldLabel}
				htmlFor={name}
			>
				{label}
			</label>
			<input
				style={{
					width: `${width}rem`,
					height: `${height}rem`,
					fontSize: `${fontSizeInput}rem`,
				}}
				className={styles.inputFieldInput}
				id={name}
				{...rest}
			/>
		</div>
	)
}

export default InputField
