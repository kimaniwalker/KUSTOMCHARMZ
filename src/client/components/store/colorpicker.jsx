import React from 'react'
import '../../scss/_colorpicker.scss'

export default function Colorpicker(props) {

    const [color, setColor] = React.useState(props.color)
    return (
        <>
           
                <div className="col-auto colorpicker">
                    <div class={props.color}>

                    </div>
                </div>

            




        </>
    )
}
