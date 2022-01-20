import React,{useState,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./AddMusic.css"
import {useDispatch,useSelector} from "react-redux"
import {getAllArtist} from "../../action/artistAction"
import {addMusic} from "../../action/musicAction"
import Loading from "../../components/Loading/Loading"
import AlertError from "../../components/AlertError/AlertError"
import AlertSuccess from "../../components/AlertSuccess/AlertSuccess"

export default function AddMusic() {

    const dispatch = useDispatch()

    const artistState = useSelector(state=>state.getAllArtistReducer)
    const {artist} = artistState
    //console.log(artist);

    const musicState = useSelector(state=>state.addMusicReducer)
    const {error,loading} = musicState

    const [form,setForm] = useState({
        title: '',
        thumbnail: '',
        year: '',
        artisId: '',
        attache: '',
    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]:
            event.target.type === "file" ? event.target.files : event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData();
        formData.set('title', form.title)
        formData.set('thumbnail', form.thumbnail[0], form.thumbnail[0].name)
        formData.set('year', form.year)
        formData.set('artisId', form.artisId)
        formData.set('attache', form.attache[0], form.attache[0].name)

        dispatch(addMusic(formData))

    }

    useEffect(()=>{
        dispatch(getAllArtist())
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <div className='container'>
            <Navbar />
                <div className='add-music-container'>
                {error ? <AlertError message={error} /> : <AlertSuccess message="add music success" />}
                    <div className='list-trans-body-header'>
                        <h1>Add Music</h1>
                    </div>
                    <form onSubmit={handleSubmit} className='add-music-form'>
                        <div className='add-music-input-title-thumbnail'>
                            <input onChange={handleChange} name="title" type="text" placeholder='Title' />
                            <label htmlFor='proofAttachment'>Attach Thumbnail</label>
                            <input onChange={handleChange} name='thumbnail' type="file" id='proofAttachment' />
                        </div>
                        <input onChange={handleChange} name='year' type="text" placeholder='Year' />
                        <select onChange={handleChange}  name='artisId'>
                            {artist?.map((item,index)=>{
                                return(
                                    <option key={index} value={item.id}>{item.name}</option>
                                )
                            })}
                        </select>
                        <div className='label' >
                            <label htmlFor='Attache' >Attache</label>
                            <input onChange={handleChange} name='attache' id="Attache" type="file" />
                        </div>
                        <div className='button' >
                            <button type='submit'>{loading ? <Loading /> : "Add Song"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
