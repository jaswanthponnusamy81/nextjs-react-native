import React from 'react';
import {GluestackUIProvider} from './components/ui/gluestack-ui-provider';
import Home from './app/page.tsx';
import './global.css';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider>
      <Home />
    </GluestackUIProvider>
  );
}

export default App;
