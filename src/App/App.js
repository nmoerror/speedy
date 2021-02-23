import React from 'react';
import Layout from '../components/pages/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';
import Contact from '../components/pages/Contact/Contact';
import Services from '../components/pages/Services/Services';
import ScrollTop from '../components/elements/ScrollTop';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollTop>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Services' component={Services} />
          </Switch>
        </ScrollTop>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
