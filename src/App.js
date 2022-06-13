import './App.css';
import { ProductForm } from './Components/ProductForms';
import { ProductListing } from './Components/ProductListing';

function App() {
  return (
    <div className="App">
      <ProductForm /> 
      <ProductListing /> 
    </div>
  );
}

export default App;
