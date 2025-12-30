import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RelationshipPage } from './pages/RelationshipPage';
import { MBTIPage } from './pages/MBTIPage';
import { SituationPage } from './pages/SituationPage';
import { AdvicePage } from './pages/AdvicePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/relationship" element={<RelationshipPage />} />
        <Route path="/mbti" element={<MBTIPage />} />
        <Route path="/situation" element={<SituationPage />} />
        <Route path="/advice" element={<AdvicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
