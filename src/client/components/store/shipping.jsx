import React, { useState } from 'react'

export default function Shipping(props) {

    const [shipping, setShipping] = useState('Free')
    const [message, setMessage] = useState('')





    return (
        <>
            <div className="container">
                <div className="row">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Shipping
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div className="container">
                                        <select onChange={(e) => setShipping(e.target.value)} class="form-select" aria-label="Default select example">
                                            <option value="Free" selected>Free Shipping - Up to 2 weeks</option>
                                            <option value="Express">35$ - Express Shipping - Next-day to 2-day guarantee by 6 PM</option>
                                            <option value="Priority">10$ - Priority Shipping - 1-3 days</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Custom Notes
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body"><div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Leave A Custom Message For Us</label>
                                    <textarea onChange={(e) => setMessage(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div></div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Disclaimer
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
