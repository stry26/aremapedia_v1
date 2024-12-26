import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Banner from '../Components/banner'
const Home = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
            <Banner/>
        <Footer />
        </div>
        ) 

}

export default Home