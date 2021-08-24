import React from 'react'


export default function Productimg(props) {

    const [main, setMain] = React.useState(props.main)
    const [images, setImages] = React.useState(props.images);


    return (
        <>
            <div className="col-12">
                <div className="row">
                    <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                        <div className="row py-3 shadow-5">
                            <div className="col-12 mb-1">
                                <div className="lightbox">
                                    <img
                                        src={main}
                                        alt="Gallery image 1"
                                        className="ecommerce-gallery-main-img active w-100"
                                    />
                                </div>
                            </div>

                            {/* <div className="col-3 mt-1">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                    alt="Gallery image 1"
                                    className="active w-100"
                                />
                            </div> */}

                            
                                {images.slice(1).map((product) => (

                                    <div key={product.id} className="col-3 mt-1">
                                    
                                        <img
                                            src={product.url}
                                            data-mdb-img={product.url}
                                            alt="Gallery image 1"
                                            className="active w-100"
                                            onClick={(e) => setMain(product.url)}
                                        />
                                    </div>


                                ))}
                            
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
