import React from 'react'
import { getUser } from '../utils/register';




export default function Passwordreset(props) {

    const [value, setValue] = React.useState('')
    const [id, setId] = React.useState('')
    const [column, setColumn] = React.useState('email')
    const [newPassword , setnewPassword] = React.useState('')

    const handleSubmit = async (e) => {

        try {
            e.preventDefault()
            let id = await getId()
            setId(id);

            console.log(id)

        } catch (err) {
            console.log(err)
        }
    }

    const getId = async () => {

        let userOb = {
            column,
            value
        }

        console.log(column)
        console.log(value)
        let res = await getUser(userOb)
        return res.id
    }

    return (
        <>
            <div className="container">
                <form>


                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">


                            <div className="text-center py-3"><h2>Reset Password</h2></div>


                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">

                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input onChange={(e) => setValue(e.target.value)} value={value} type="text" class="form-control" id="email" placeholder="Daviddavinci@gmail.com" />
                            </div>

                        </div>
                        <div className="col-12">
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}
