import React from 'react'


export default function Productimg(props) {

    const [main, setMain] = React.useState(props.main)
    const [images, setImages] = React.useState(props.images);


    return (
        <>
            <div className="col-12">
                <div className="row">
                    <div class="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                        <div class="row py-3 shadow-5">
                            <div class="col-12 mb-1">
                                <div class="lightbox">
                                    <img
                                        src={main}
                                        alt="Gallery image 1"
                                        class="ecommerce-gallery-main-img active w-100"
                                    />
                                </div>
                            </div>

                            {/* <div class="col-3 mt-1">
                                <img
                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                    alt="Gallery image 1"
                                    class="active w-100"
                                />
                            </div> */}

                            
                                {images.slice(1).map((product) => (

                                    <div key={product.id} class="col-3 mt-1">
                                    
                                        <img
                                            src={product.url}
                                            data-mdb-img={product.url}
                                            alt="Gallery image 1"
                                            class="active w-100"
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
