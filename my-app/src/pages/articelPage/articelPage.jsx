import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/navbar"
import axios from "axios"
import { useParams } from "react-router-dom"
import styled from "./articelPage.module.css"
import Footer from "../../components/footer/footer"
import LoadingPage from "../../components/loadingPage/loadingPage"

function ArticelPage() {
 const params=useParams();
 const [articel,setArticel]=useState([])
 const [isLoading,setIsLoading]=useState(false)
 useEffect(()=>{
    setIsLoading(true)
    axios.get(`http://localhost:8000/articels/${params.id}`).then((result)=>{
        setIsLoading(false)
        setArticel(result.data)
    }).catch((error)=>{
        console.log(error);
    })
 },[])




    return(
        <div className={styled.articelPage}>
            <Navbar />
            {
                isLoading?(<LoadingPage />):(
                    <div className="container">
                    <h3> {articel.title}</h3>
                    <div className={styled.articelPageTitle}>
                        <span>{articel.date} : تاریخ</span>
                        <span>نویسنده : {articel.writer}</span>
                        <span>مدت زمان خواندن : {articel.readingTime} دقیقه </span>
                    </div>
                    <img src={articel.imageUrl} alt="" />
                    <p>{articel.content}</p>
                </div>
                )
            }
            <Footer />
        </div>
    )
}
export default ArticelPage