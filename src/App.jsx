import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DestinationExplorer from './pages/DestinationExplorer';
import PackingList from './pages/PackingList';
import AmericaVsAsia from './pages/AmericaVsAsia';
import FacebookGroups from './pages/FacebookGroups';
import DestinationComparison from './pages/DestinationComparison';
import InsuranceGuide from './pages/InsuranceGuide';
import BudgetCalculator from './pages/BudgetCalculator';
import TravelerTips from './pages/TravelerTips';
import SoloVsGroup from './pages/SoloVsGroup';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedDestination, setSelectedDestination] = useState(null);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} setSelectedDestination={setSelectedDestination} />;
      case 'destinations':
        return <DestinationExplorer initialDestination={selectedDestination} />;
      case 'packing':
        return <PackingList />;
      case 'comparison':
        return <AmericaVsAsia />;
      case 'facebook':
        return <FacebookGroups />;
      case 'compare-dest':
        return <DestinationComparison />;
      case 'insurance':
        return <InsuranceGuide />;
      case 'budget':
        return <BudgetCalculator />;
      case 'tips':
        return <TravelerTips />;
      case 'solovgroup':
        return <SoloVsGroup />;
      default:
        return <HomePage setActivePage={setActivePage} setSelectedDestination={setSelectedDestination} />;
    }
  };

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f', fontFamily: 'Heebo, sans-serif' }} dir="rtl">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}
