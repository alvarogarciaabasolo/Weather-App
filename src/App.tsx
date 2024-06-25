import { Sidebar } from './components/sidebar/Sidebar';
import { ContentBody } from './components/contentBody/ContentBody';
import { ContentMain } from './styles/AppCss';
import { useState } from 'react';
import { CurrentWeatherProvider } from './context/CurrentWeatherContext';
import { CoordsBooleanProvider } from './context/CoordsBooleanContext';

function App() {
  const [isFahrenheit, setIsFahrenheit] = useState<boolean>(true);
  return (
    <ContentMain>
      <CoordsBooleanProvider>
        <CurrentWeatherProvider>
          <Sidebar isFahrenheit={isFahrenheit} />
          <ContentBody
            setFahrenheit={setIsFahrenheit}
            isFahrenheit={isFahrenheit}
          />
        </CurrentWeatherProvider>
      </CoordsBooleanProvider>
    </ContentMain>
  );
}

export default App;
