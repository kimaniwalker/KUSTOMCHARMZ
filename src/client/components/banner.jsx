import React from 'react'
import '../scss/_banner.scss'


export default function Banner(props) {


    return (
        <>
            <main className="banner d-flex align-items-center">
                <div className="container-fluid banner-bg bg-primary d-flex justify-content-center align-items-center">

                    <div className="row justify-content-center p-5 text-light">
                       
                       <div className="col-12">
                           <span><div className="text-center py-2 title"><h1>{props.title}</h1></div></span>
                       </div>
                        <div className="col-8">
                            
                            <span><div className="text-center py-2"><p>{props.message}</p></div></span>
                        </div>

                    </div>

                </div>
            </main>

        </>
    )
}
