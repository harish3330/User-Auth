import BottomNavBar from "../Components/BottomNavBar";
import FeaturedProducts from "../Components/FeaturedProducts";
import MiddleNavBar from "../Components/MiddleNavBar";
import TopNavBar from "../Components/TopNavBar";


function Products () {
    return (
        <div className="bg-gradient-to-r from-cyan-200 to-gray-100">
            <TopNavBar/>
            <MiddleNavBar/>
            <BottomNavBar/>
            <FeaturedProducts/>
        </div>

    )
}

export default Products;