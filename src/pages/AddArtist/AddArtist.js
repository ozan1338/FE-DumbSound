import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./AddArtis.css"
import {useSelector,useDispatch} from "react-redux"
import Loading from "../../components/Loading/Loading"
import AlertError from "../../components/AlertError/AlertError"
import AlertSuccess from "../../components/AlertSuccess/AlertSuccess"
import { addArtist } from '../../action/artistAction'

export default function AddArtist() {

    const dispatch = useDispatch()

    const artistState = useSelector(state=>state.addArtistReducer)
    const {loading,error} = artistState

    const [name,setName] = useState('')
    const [old,setOld] = useState('')
    const [type,setType] = useState('')
    const [startCareer,setStartCareer] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
            name,
            old,
            type,
            startCareer
        }

        dispatch(addArtist(data))
    }

    return (
        <>
         <div className='container'>
         <Navbar />
            <div className='add-artist-container'>
                {error ? <AlertError message={error} /> : <AlertSuccess message="Add Artist Success" />}
                <div className='list-trans-body-header'>
                    <h1>Add artis</h1>
                </div>
                <form onSubmit={handleSubmit} className='form-add-artist'>
                    <input onChange={(event)=>setName(event.target.value)} type="text" placeholder='Name' />
                    <input onChange={(event)=>setOld(event.target.value)} type="text" placeholder='Old' />
                    <select onChange={(event)=>setType(event.target.value)}  name='Type-band'>
                        <option value="Solo">Solo</option>
                        <option value="Band">Band</option>
                    </select>
                    <input onChange={(event)=>setStartCareer(event.target.value)} type="text" placeholder='Start a Career' />
                    <button type='submit' >{loading ? <Loading /> : "Add Artist"}</button>
                </form>
            </div>
         </div>   
        </>
    )
}
