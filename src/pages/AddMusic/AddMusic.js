import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./AddMusic.css"

export default function AddMusic() {

    const data = [
        {
            name: "ozan"
        },
        {
            name: "fadhil"
        },
        {
            name: "reza"
        },
    ]

    return (
        <>
            <div className='container'>
            <Navbar />
                <div className='add-music-container'>
                    <div className='list-trans-body-header'>
                        <h1>Add Music</h1>
                    </div>
                    <form className='add-music-form'>
                        <div className='add-music-input-title-thumbnail'>
                            <input type="text" placeholder='Title' />
                            <label htmlFor='proofAttachment'>Attach Thumbnail</label>
                            <input type="file" id='proofAttachment' />
                        </div>
                        <input type="text" placeholder='Year' />
                        <select  name='Type-band'>
                            {data.map((item,index)=>{
                                return(
                                    <option key={index} value={item.name}>{item.name}</option>
                                )
                            })}
                        </select>
                        <div className='label' >
                            <label htmlFor='Attache' >Attache</label>
                            <input id="Attache" type="file" />
                        </div>
                        <div className='button' >
                            <button type='submit'>Add Song</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
