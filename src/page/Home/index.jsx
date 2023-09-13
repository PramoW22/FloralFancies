import Footer from "../../component/molecules/Footer";
import Navbar from "../../component/molecules/Navbar";
const Home =() => {
    const imageUrl ="https://cdn.pixabay.com/photo/2018/08/19/19/33/flower-3617401_960_720.jpg"
    return(
        <div className="HomePagePicture"> <Navbar/>
        <img src={imageUrl} className="img-fluid" alt="hhhh" width="500" height="500"/>
        <Footer/>
        </div>
    )
}
export default Home;