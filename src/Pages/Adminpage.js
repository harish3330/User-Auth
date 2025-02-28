import Admindasboard from "../Components/Admindashboard";
import Adminmenubar from "../Components/Adminmenubar";
import AdminTopbar from "../Components/AdminTopbar";

function Adminpage() {
    return (
        <div className="grid grid-cols-12">
            <div className=" col-span-2">

                <Adminmenubar />
            </div>
            <div className="col-span-10">
                <AdminTopbar />
                <Admindasboard />

            </div>
        </div>
    )
}

export default Adminpage;


