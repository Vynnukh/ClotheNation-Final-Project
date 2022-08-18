import Card from './Card';
import React,{useState,useEffect} from 'react';


const Marketplace = () => {

    const [fake, setFake] = useState([]);
    console.log(fake);
    useEffect(() => {
        fakeStore();
    },[])

    const fakeStore = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        // console.log(response)
        const jsonData = await response.json();
        // console.log(jsonData);
        setFake(jsonData)
    }
    // fakeStore();


    return (
        <div>
            <h1>Temp message for Marketplace</h1>
            {fake.map((values) => {
                return (
                    <div className="market">
                        <div className='cards'>
                            <Card values={values}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Marketplace