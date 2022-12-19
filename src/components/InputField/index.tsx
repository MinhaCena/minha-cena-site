import { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	label: string
	width?: string
	height?: string
	fontSizeLabel?: string
}

const InputField: FC<InputProps> = ({
	name,
	label,
	width,
	height,
	fontSizeLabel,
	...rest
}) => {
	return (
		<div className={styles.inputFieldGroup}>
			<label
				style={{ fontSize: `${fontSizeLabel}rem` }}
				className={styles.inputFieldLabel}
				htmlFor={name}
			>
				{label}
			</label>
			<input
				style={{ width: `${width}rem`, height: `${height}rem` }}
				className={styles.inputFieldInput}
				id={name}
				{...rest}
			/>
		</div>
	)
}

export default InputField
