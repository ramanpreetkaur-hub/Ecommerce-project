
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import { useEventListener } from "usehooks-ts";
function MyLayout() {
  // const navigate = useNavigate()

  // useEventListener("keydown", (e) => {
  //   console.log("keydown", e.key)

  //   if (e.key === 'r') {
  //     navigate("/home-page")
  //   }
  //   if (e.key === 'a') {
  //     navigate("/singers")
  //   }

  // })
  // useEventListener("keyup", (s) => {
  //   console.log("keyup", s.key);
  //   if (s.key === 'm')
  //     navigate("/concept/Tailwind-task")
  //   if (s.key === 'n')
  //     navigate("/concept/State-management")

  // });




  // const Mousemove=()=>{
  //     setText('vibrant.')
  // };



  return (
    <div className='' >
      {/* start navbar   */}

      <Navbar />

      {/* end navbar  */}
      {/* bg start */}
    
      <Outlet />

      {/* footer 1 */}
      <Footer />
    </div>
  )
}

export default MyLayout