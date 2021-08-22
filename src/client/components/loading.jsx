import React from 'react'
import '../scss/_loading.scss'

export default function Loading(props) {
    

    return (
        <>
            <main className="loading">
                <div className="container">
                    <div className="row justify-content-center">
                        <div class="spinner-grow text-secondary" role="status">
                        </div>
                    </div>

                </div>
            </main>
                
        </>
    )
}
