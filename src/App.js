import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const tabs = [
  {
    name: '11-20Mb/s',
    icon: 'https://img.icons8.com/ios-glyphs/90/000000/sloth.png',
    speeds: '11-20Mb/s',
    component: (
      <div className="essential">
        <h1>Essential</h1>
        <h2>Ideal for&hellip;</h2>
        <i class="fas fa-envelope-open-text zoomIn animated" />
        <i class="fas fa-tv zoomIn animated" />
      </div>
    ),
    price: '£25',
  },
  {
    name: '20-65Mb/s',
    icon: 'https://img.icons8.com/ios-filled/100/000000/cat-profile.png',
    speeds: '21-45Mb/s',
    component: (
      <div className="superfast">
        <h1>Superfast</h1>
        <h2>Ideal for&hellip;</h2>
        <i class="fas fa-envelope-open-text zoomIn animated" />
        <i class="fas fa-tv zoomIn animated" />
        <i class="fas fa-gamepad zoomIn animated" />
      </div>
    ),
    price: '£27',
  },
  {
    name: '2Gb/s',
    icon: 'https://img.icons8.com/ios-glyphs/90/000000/white-jaguar.png',
    speeds: '100-125Mb/s',
    component: (
      <div className="ultrafast">
        <h1>Ultrafast</h1>
        <h2>Ideal for&hellip;</h2>
        <i class="fas fa-envelope-open-text zoomIn animated" />
        <i class="fas fa-tv zoomIn animated" />
        <i class="fas fa-gamepad zoomIn animated" />
        <span className="fourk zoomIn animated">4K</span>
      </div>
    ),
    price: '£29',
  },
];
function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="app">
      <div className="tabs">
        {tabs.map((tab, i) => {
          const isSelected = i === selectedTab;
          return (
            <>
              <button
                className={isSelected ? 'selected' : ''}
                onClick={() => setSelectedTab(i)}>
                <img alt="" src={tab.icon} />
                {tab.name}
              </button>
            </>
          );
        })}
      </div>
      <div className="product-info">
        {tabs.map(
          (tab, i) =>
            i === selectedTab && (
              <>
                {tab.component}
                <span className="price">{tab.price}</span>
                <p className="legal">
                  18 months contract, then £30 a month thereafter. £9.95 one-off
                  cost. Prices may change during this period. Price includes Sky
                  Broadband Boost.
                </p>
              </>
            ),
        )}
      </div>
    </div>
  );
}

export default App;
