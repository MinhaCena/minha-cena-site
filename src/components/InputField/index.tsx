import { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	label: string
	maxWidth?: string
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
	maxWidth,
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
				maxWidth: `${maxWidth}rem`,
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
					maxWidth: `${maxWidth}rem`,
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
