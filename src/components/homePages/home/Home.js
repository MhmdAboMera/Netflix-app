import Create from "../create/Create";
import Enjoy from "../enjoy/Enjoy";
import Footer from "../footer/Footer";
import Landing from "../landing/Landing";
import Main from "../main/Main";
import Questions from "../questions/Questions";
import Watch from "../watch/Watch";

function Home() {
  return (
    <>
      <Landing />
      <Enjoy />
      <Main />
      <Watch />
      <Create />
      <Questions />
      <Footer />
    </>
  );
}
export default Home;
