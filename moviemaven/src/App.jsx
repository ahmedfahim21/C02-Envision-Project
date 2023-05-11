import './App.css'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Movies from './components/Movies';


const App =() =>{
    
    return(
        <div>
            <Hero/>
            <Movies/>
            <Footer>
            <h2 id="about-us">About us</h2>
              <p>This is some information about our movie review and rating app.</p>

             <h2 id="help">Help</h2>
                 <p>If you need help using our app, please contact us at help@moviemaven.com.</p>

             <h2 id="terms-and-conditions">Terms and conditions</h2>
                 <p>By using our app, you agree to our terms and conditions.</p>

             <h2 id="privacy-policy">Privacy policy</h2>
                  <p>We take your privacy seriously. Please read our privacy policy for more information.</p>
            </Footer>
            
        </div>
    );
}

export default App;   