import React, {useState, useEffect} from 'react';
import Fire from '../../../../firebase';
import Product from '../product';


const Hp_14 = () => {
    

    useEffect(() => {
      const db = Fire.firestore();
       db.collection('head_14_hp').orderBy("choice").onSnapshot(snapshot => (
         setHead(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('specs_14_hp').onSnapshot(snapshot => (
         setSpecs(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('youtube_14_hp').onSnapshot(snapshot => (
         setYoutube(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('blog_14_hp').onSnapshot(snapshot => (
         setBlog(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('seller_14_hp').orderBy("name").onSnapshot(snapshot => (
         setSeller(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('gaming_14_hp').onSnapshot(snapshot => (
         setGaming(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('tech_14_hp').orderBy("serial").onSnapshot(snapshot => (
         setTech(snapshot.docs.map(doc => doc.data()))
       ))
       }, []);



    const [head,setHead] = useState([]);
    const [specs,setSpecs] = useState([]);
  
    const [youtube,setYoutube] = useState([]);
    const [blog,setBlog] = useState([]);
    const [seller,setSeller] = useState([]);
    
    const [gaming,setGaming] = useState([]);
    const [tech,setTech] = useState([]);

    return (
        <div>
            {head.map((head) => (
           <Product choice={head.choice} device={head.device} url={head.url} specs={specs} youtube={youtube} blog={blog} seller={seller} gaming={gaming} tech={tech}/>
          ))}
        </div>
    )
}

export default Hp_14

