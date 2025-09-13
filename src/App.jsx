import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
function App() {

  return (
    <>
    <div className="flex min-h-screen flex-col bg-[url('./assets/star-sky2.jpg')] bg-cover bg-center">
      <Header />
      <Main />
      <Footer />
    </div>
    </>
  )
}

export default App
