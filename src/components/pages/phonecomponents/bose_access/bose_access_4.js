import React, {useState, useEffect} from 'react';
import Fire from '../../../../firebase';
import Product from '../product';


const Bose_access_4 = () => {
    

    useEffect(() => {
      const db = Fire.firestore();
       db.collection('head_4_bose_access').orderBy("choice").onSnapshot(snapshot => (
         setHead(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('specs_4_bose_access').onSnapshot(snapshot => (
         setSpecs(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('youtube_4_bose_access').onSnapshot(snapshot => (
         setYoutube(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('blog_4_bose_access').onSnapshot(snapshot => (
         setBlog(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('seller_4_bose_access').orderBy("name").onSnapshot(snapshot => (
         setSeller(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('gaming_4_bose_access').onSnapshot(snapshot => (
         setGaming(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('tech_4_bose_access').orderBy("serial").onSnapshot(snapshot => (
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

export default Bose_access_4

