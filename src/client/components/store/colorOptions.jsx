import React from 'react'
import Colorpicker from '../store/colorpicker'

export default function Coloroptions(props) {


    const [color , setColor] = React.useState('');


    const selectColor = (color) => {
        setColor(color)
        props.getColor(color)
    }

    
    return (
        <>
            <div className="container">
                <div className="row py-2">
                    <h6>{color ? 'Selected Color:' + ' ' + color : 'Select A Color:'}</h6>
                </div>
                <div className="d-flex flex-row">
                    <span className="d-inline-flex" onClick={(e) => selectColor('Pink')}><Colorpicker color={'circle pink'} /></span>
                    
                    <span className="d-inline-flex" onClick={(e) => selectColor('Green')} ><Colorpicker color={'circle green'} /></span>
                    <div className="d-inline-flex" onClick={(e) => selectColor('Blue')}><Colorpicker color={'circle blue'} /></div>
                    <div className="d-inline-flex" onClick={(e) => selectColor('Orange')}><Colorpicker color={'circle orange'} /></div>
                    <div className="d-inline-flex" onClick={(e) => selectColor('Red')}><Colorpicker color={'circle red'} /></div>
                    <div className="d-inline-flex" onClick={(e) => selectColor('Purple')}><Colorpicker color={'circle purple'} /></div>
                    
                </div>
            </div>
        </>
    )
}
