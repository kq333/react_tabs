import React, { useState } from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { TabList } from './components/Tabs/TabList';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [textTitle, setTextTitle] = useState(tabs[0].title);

  const clickedContent = (contentValue: string) => {
    const foundedValue = tabs.find((tab) => tab.id === contentValue);

    if (foundedValue) {
      setTextTitle(foundedValue.title);
    }
  };

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${textTitle}`}</h1>

      <TabList
        tabs={tabs}
        clickedContent={clickedContent}

      />
    </div>
  );
};
