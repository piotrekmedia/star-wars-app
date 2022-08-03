import './App.scss';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<Menu />
			<Homepage />
			<Footer />
		</div>
	);
}

export default App;
