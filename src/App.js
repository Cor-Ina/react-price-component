
import Community from './components/Community'
import Subscription from './components/Subscription'
import Why from './components/Why'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="price">
        <Community />
        <Subscription />
        <Why />
      </main>
      <Footer />
    </div>
  );
}

export default App;
