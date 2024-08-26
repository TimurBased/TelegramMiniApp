import './App.css'
import { useEffect } from 'react'
tg = window.Telegram.WebApp

function App() {
	useEffect(() => {
		tg.ready()
	}, [])
	const onClose = () => {
		tg.close()
	}
	return (
		<div className='App'>
			work
			<button></button>
		</div>
	)
}

export default App
