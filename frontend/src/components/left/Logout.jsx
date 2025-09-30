import { BiLogOut } from "react-icons/bi";
import { useMainContext } from "../../context/maincontext";


const Logout = () => {

const {logoutUser} = useMainContext()

  return (
    <button   onClick={logoutUser} className="flex items-center sm:gap-2 gap-1 text-red-400 hover:text-red-500 font-medium">
      <BiLogOut className="sm::text-xl " />
      Logout
    </button>
  );
};

export default Logout;
