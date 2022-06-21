import './App.scss';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Searchbar from './components/Searchbar/Searchbar';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<Homepage />
			<Menu />
			<Searchbar />
			<Footer />
		</div>
	);
}

export default App;
