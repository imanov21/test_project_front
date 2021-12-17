import { BrowserRouter as Router } from 'react-router-dom';
import Routs from './routes/Router';
import { Header } from './components/Header/Header';
import { Footer } from './components/footer/Footer';
import './App.css';
import 'tailwindcss/tailwind.css';
import GlobalCssOverride from './GlobalStyles';

function App() {
    return (
        <div className="wrapper">
            <Router>
                <GlobalCssOverride />
                <Header />
                <main>
                    <Routs />
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
