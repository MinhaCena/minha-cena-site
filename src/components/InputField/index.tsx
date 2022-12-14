import { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	label: string
	width?: string
}

const InputField: FC<InputProps> = ({ name, label, width, ...rest }) => {
	return (
		<div className={styles.inputFieldGroup}>
			<label className={styles.inputFieldLabel} htmlFor={name}>
				{label}
			</label>
			<input
				style={{ width: `${width}rem` }}
				className={styles.inputFieldInput}
				id={name}
				{...rest}
			/>
		</div>
	)
}

export default InputField
