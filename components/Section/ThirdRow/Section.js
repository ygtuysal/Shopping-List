import React from 'react'
import Itemcard from './Itemcard' ;
import data from './data' ;


const Section3 = () => {
    return (
        <>
               
                <section className="py-2 container">
                    <div className="row justify-content-center">
                            {data.productData.map((item,index)=>{
                                return(
                                    <Itemcard  itemType={item.itemType} title={item.title} desc={item.desc} price={item.price} key={index} />
                                )
                            })}
                        
                    </div>
                </section>


        </>
    )
}

export default Section3
