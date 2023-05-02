import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

type SelectOption = {
	label: string
	value: number
}

interface ISelectProps {
	margin?: string
	label?: string
	options: SelectOption[]
	value?: SelectOption | undefined
	onChange: (value: SelectOption | undefined) => void
}

export default function SelectField({
	label,
	margin,
	value,
	onChange,
	options,
}: ISelectProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [hightlitedIndex, setHightlitedIndex] = useState(0)

	function selectOption(option: SelectOption | undefined) {
		if (option !== value) onChange(option)
	}

	function isOptionSelected(option: SelectOption) {
		return option === value
	}

	useEffect(() => {
		if (isOpen) setHightlitedIndex(0)
	}, [isOpen])

	return (
		<div
			style={{
				margin: `${margin} 0`,
			}}
		>
			<label htmlFor="select" className={styles.selectLabel}>
				{label}
			</label>
			<div
				id="select"
				onBlur={() => setIsOpen(false)}
				onClick={() => setIsOpen((prev) => !prev)}
				tabIndex={0}
				className={styles.selectContainer}
			>
				<span className={styles.selectOptionLabel}>{value?.label}</span>
				<div className={styles.selectIconWrapper}>
					<Image
						src="/icons/arrow-down.svg"
						width={16}
						height={16}
						alt="selecione uma opção"
						className={styles.selectIcon}
					/>
				</div>
				<ul
					className={`${styles.selectOptionsListIsClose} ${
						isOpen
							? styles.selectOptionsListIsOpen
							: styles.selectOptionsListIsClosed
					}`}
				>
					{options.map((option, index) => (
						<li
							onClick={(e) => {
								e.stopPropagation()
								selectOption(option)
								setIsOpen(false)
							}}
							onMouseEnter={() => setHightlitedIndex(index)}
							className={`${styles.selectOptionsListItem} ${
								isOptionSelected(option) ? styles.itemSelected : ''
							}${index === hightlitedIndex ? styles.itemSelected : ''}`}
							key={option.value}
						>
							{option.label}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
