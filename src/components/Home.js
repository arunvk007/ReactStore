import React,{useState,useEffect} from 'react'
import { Row } from 'react-bootstrap'
import Productcard from './Productcard'

function Home() {

    const [prod,setProd] = useState([])

    const fetchData=async ()=>{
       await fetch("/products.json").then(res=>res.json()).then(res=>setProd(res))
    }
    
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <>
        <Row sm={3} md={4} lg={6} xl={8}>
          {prod.map(item=>{
            return(
              <Productcard item={item}/>
            )
          })}
        </Row>
    </>
  )
}



export default Home

//fetch -js predefined asynch method
//fetch - function ->asynchronous function -> async,await