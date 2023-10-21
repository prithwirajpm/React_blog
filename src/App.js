import { useState } from 'react';
import './App.css';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  const [uploadBlogServerResponse,setuploadBlogServerResponse] = useState({})
  return (
    <div className="App">
      <Header setuploadBlogServerResponse={setuploadBlogServerResponse}/>
      <hr />
      <Blogs uploadBlogServerResponse={uploadBlogServerResponse}/>
      <hr />
     <Footer />
    </div>
  );
}

export default App;
