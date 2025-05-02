import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './styles.css';

// Importar pantallas principales
import Home from './components/screens/Home';
import Welcome from './components/screens/Welcome';
import Introduction from './components/screens/Introduction';
import Menu from './components/screens/Menu';
import Loading from './components/screens/Loading';
import ColorTheory from './components/screens/ColorTheory';
import GestaltPrinciples from './components/screens/GestaltPrinciples';
import JakobNielsen from './components/screens/JakobNielsen';
import DataCollection from './components/screens/DataCollection';
import Wireframes from './components/screens/Wireframes';

// Importar juegos
import MemoryGame from './components/games/MemoryGame';
import ColorTest from './components/games/ColorTest';
import QuizGame from './components/games/QuizGame';
import MatchGame from './components/games/MatchGame';
import FillBlanks from './components/games/FillBlanks';
import Rating from './components/games/Rating';

// App principal
const App = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/color-theory" element={<ColorTheory />} />
            <Route path="/gestalt-principles" element={<GestaltPrinciples />} />
            <Route path="/jakob-nielsen" element={<JakobNielsen />} />
            <Route path="/data-collection" element={<DataCollection />} />
            <Route path="/wireframes" element={<Wireframes />} />
            <Route path="/memory-game" element={<MemoryGame />} />
            <Route path="/color-test" element={<ColorTest />} />
            <Route path="/quiz-game" element={<QuizGame />} />
            <Route path="/match-game" element={<MatchGame />} />
            <Route path="/fill-blanks" element={<FillBlanks />} />
            <Route path="/rating" element={<Rating />} />
          </Routes>
        </div>
      </AnimatePresence>
    </Router>
  );
};

export default App;