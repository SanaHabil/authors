import React,{useState,useEffect} from 'react';
//import TextField from '@mui/material/TextField'
import axios from 'axios';
import {useNavigate,Link, useParams} from 'react-router-dom'
import validator from 'validator'



const AuthorEdit = (props) => {
    const [authorName, setAuthorName] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const {id} = useParams();
    

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/authors/'+id)
        .then((res)=>{
            //console.log(res.data);
            setAuthorName(res.data.author[0].authorName);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const nameHandler=(e)=>{
        setErrors("")
        setAuthorName(e.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put('http://127.0.0.1:8000/api/authors/' + id, {
            authorName
        })
            .then((author) => {
                console.log(author.data);
                navigate("/authors");
            })
            .catch((err)=>{
                console.log(err.response.data.error.errors)
                setErrors(err.response.data.error.errors)
            })
    }

    

return (
    <div>
        <div className="container">
            <div className="">
                <h1>Favorite Authors</h1>
                <Link className="linkClass" to="/authors">Home</Link>
                
            </div>
            <div className="formdiv">
                <form onSubmit={submitHandler}>
                    <p className="p-purple">Edit The Author:</p><br/>
                    <div>
                        {errors.authorName ? <p className="input-label">{errors.authorName.message}</p>:null}
                        <input className="inputbox" type="text" label="Name" onChange={nameHandler} value={authorName} />
                    </div>
                    <br/>
                    <div className="btndiv">
                        <button onClick={submitHandler} type="submit" className = "btn hover">Submit</button>
                        <button onClick={()=>navigate('/authors')} type="submit"  className = "btn hover">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default AuthorEdit