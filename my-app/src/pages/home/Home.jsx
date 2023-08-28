import { useEffect, useState } from "react";
import Articels from "../../components/articels/articels";
import Navbar from "../../components/navbar/navbar";
import styled from "./Home.module.css";
import axios from "axios";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import LoadingPage from "../../components/loadingPage/loadingPage";


function Home() {
  const [articels, setarticels] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get("http://localhost:8000/articels").then((result) => {
      setIsLoading(false)
      setarticels(result.data);
    });
  },[]);

  return (
    <div className={styled.homeWrapper}>
      
      <Navbar />

      {
        isLoading ? <LoadingPage /> :
        <div className="container">
        <h3>مقالات جدید</h3>
        <div className={styled.articels}>
          {articels.map((articel) => (
            <Link to={`/articelPage/${articel.id}`}>
              <Articels key={articel.id} list={articel} />
              </Link>
          ))}
        </div>
      </div>
      }

      <Footer />
    </div>
  );
}
export default Home;
