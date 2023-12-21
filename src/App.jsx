import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";
import Content from "./ui/Content";
import Footer from "./ui/Footer";

function App() {
  return (
    <div className="h-full md:flex md:flex-col md:justify-between">
      <GlobalStyles />
      <div>
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
