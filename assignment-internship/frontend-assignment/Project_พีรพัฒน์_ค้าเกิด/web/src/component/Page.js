import React,{useEffect,useState} from 'react';
import {  useParams } from 'react-router-dom';
import '../App.css';

function Page() {
    const {keyword} =useParams()
    const [trips,setTrips]=useState([])

    const getTrip =async()=>{
        if(keyword){
            const res= await fetch(`http://127.0.0.1:8000/api/trips/search?keyword=${keyword}`)
            const data =await res.json()
            console.log(data)
            
            setTrips(data)
        }else{
            const res= await fetch('http://127.0.0.1:8000/api/trips')
            const data =await res.json()
            console.log(data)
            setTrips(data)
        }

    }
    
      useEffect(()=>{
        getTrip()
      },[keyword])


return(
    <div className='Page'>
        <ul>
            {trips.map((trip)=>((
                <li className='Page__field' key={trip.eid} >
                    <div className='Page__firstPhoto'>
                        <img src={trip.photos[0]} alt={trip.photos[0]} />
                    </div>  
                    <div className='Page__info'>
                        <h3>
                            <a className='info_title' href={trip.url}>
                                {trip.title}
                            </a>
                        </h3>

                        <p className='info__description'>
                            {trip.description} 
                            <a className='info__link' href={trip.url}>
                                อ่านต่อ
                            </a>
                        </p>

                        <div className='Page__tags'>
                            <h5>
                                หมวด
                            </h5>
                            {trip.tags.map((tag,index)=>{
                                return (
                                <p className='Page__tag' key={index}>
                                    <a  href={`/search/${tag}`} >
                                        {tag}
                                    </a>
                                </p>
                            )})}
                        </div>

                        <div className='Page__photos'>
                            <img src={trip.photos[1]} alt={trip.photos[1]} />
                            <img src={trip.photos[2]} alt={trip.photos[2]} />
                            <img src={trip.photos[3]} alt={trip.photos[3]} />
                        </div>
                    </div>
                </li>
            )))}
        </ul>
    </div>
)
}
export default Page;