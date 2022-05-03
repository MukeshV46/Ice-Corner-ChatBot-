import img1 from "D:/React/my-react-app/src/Dasher/Images/ezgif.com-gif-maker.jpg"
import img2 from "D:/React/my-react-app/src/Dasher/Images/ezgif.com-gif-maker (1).jpg"
import img3 from "D:/React/my-react-app/src/Dasher/Images/ezgif.com-gif-maker (3).jpg"
import img4 from "D:/React/my-react-app/src/Dasher/Images/ezgif.com-gif-maker (4).jpg"
import img5 from "D:/React/my-react-app/src/Dasher/Images/ezgif.com-gif-maker (2).jpg"
import logo from "D:/React/my-react-app/src/Dasher/Images/logo.png"
import './Css/carosel.css'
const Carose = ()=>{
    return(
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={img1} alt="First slide"/>
            <div class="carousel-caption">
                <img src={logo} class="logoi" alt="" />
                <h4>LIFE IS SHORT,EAT ICE CREAM</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img2} alt="Second slide"/>
            <div class="carousel-caption">
                <img src={logo} class="logoi" alt="" />
                <h4>LIFE IS SHORT,EAT ICE CREAM</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img3} alt="Third slide"/>
            <div class="carousel-caption">
                <img src={logo} class="logoi" alt="" />
                <h4>LIFE IS SHORT,EAT ICE CREAM</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img4} alt="Third slide"/>
            <div class="carousel-caption">
                <img src={logo} class="logoi" alt="" />
                <h4>LIFE IS SHORT,EAT ICE CREAM</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img5} alt="Third slide"/>
            <div class="carousel-caption">
                <img src={logo} class="logoi" alt="" />
                <h4>LIFE IS SHORT,EAT ICE CREAM</h4>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>       
    )
}
export default Carose;