import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import styled from "./createArticels.module.css";
import { useState } from "react";
import InputCreateArticel from "../../components/inputcreatearticel/inputcreatearticel";
import TextArea from "../../components/texrarea/textArea";
import axios from "axios"
function CreateArticels(title,name,onChange) {
  const [newArticel, setNewArticel] = useState({
    title: "",
    date: "",
    writter: "",
    readingTime: "",
    textarea:"",
    imageUrl:"",
  });

  const handelChange = (e) => {
    setNewArticel((preveNewArticel) => ({
      ...preveNewArticel,
      [e.target.name]: e.target.value,
    }));
  };
  const handelChangeArea = (e) => {
    setNewArticel((preveNewArticel) => ({
      ...preveNewArticel,
      textarea: e.target.value,
    }));
  };
  const handleCreateArticel=()=>{
    axios.post("http://localhost:8000/articels",{
    id:6,
    imageUrl: newArticel.imageUrl ,
    title:newArticel.title ,
    readingTime: newArticel.readingTime,
    date: newArticel.date,
    writer: newArticel.writter,
    content:newArticel.textarea ,
    })
  }



  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>ساخت مقاله جدید</h2>
        <div className={styled.createArticels}>
            <InputCreateArticel title="عنوان" name="title" onChange={handelChange}/>
            <InputCreateArticel title="تاریخ"  name="date" onChange={handelChange}/>
            <InputCreateArticel title="نویسنده"  name="writter" onChange={handelChange}/>
            <InputCreateArticel title="مدت زمان خواندن"  name="readingTime" onChange={handelChange}/>
            <InputCreateArticel title="ادرس عکس" name="imageUrl" onChange={handelChange} />
            <TextArea  title="متن" name="textarea" onChange={handelChangeArea}/>
            <div className={styled.button}>
              <button onClick={handleCreateArticel}>ساخت مقاله</button>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CreateArticels;
