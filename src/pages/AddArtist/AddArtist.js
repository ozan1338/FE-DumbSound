import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./AddArtis.css"

export default function AddArtist() {
    return (
        <>
         <div className='container'>
         <Navbar />
            <div className='add-artist-container'>
                <div className='list-trans-body-header'>
                    <h1>Add artis</h1>
                </div>
                <form className='form-add-artist'>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Old' />
                    <select  name='Type-band'>
                        <option value="Solo">Solo</option>
                        <option value="Group">Group</option>
                    </select>
                    <input type="text" placeholder='Start a Career' />
                    <button type='submit' >Add Artist</button>
                </form>
            </div>
         </div>   
        </>
    )
}
