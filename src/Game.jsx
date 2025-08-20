import { useDispatch } from 'react-redux'
import styles from './Game.module.css'
import { Field, Information } from './components'
import { startAgain } from './operations'

export const Game = () => {
	const dispatch = useDispatch()

	return (
		<>
			<Information />
			<Field />
			<button onClick={() => startAgain(dispatch)} className={styles.button}>
				Начать заново
			</button>
		</>
	)
}
