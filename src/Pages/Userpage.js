import Userdasboard from "../Components/Userdashboard";
import Usermenubar from "../Components/Usermenubar";
import UserTopbar from "../Components/UserTopbar";

function Userpage() {
    return (
        <div className="grid grid-cols-12">
            <div className=" col-span-2">

                <Usermenubar />
            </div>
            <div className="col-span-10">
                <UserTopbar />
                <Userdasboard />

            </div>
        </div>
    )
}

export default Userpage;