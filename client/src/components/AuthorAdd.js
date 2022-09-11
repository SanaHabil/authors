import React,{useState} from 'react';
import TextField from '@mui/material/TextField'
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom'
//import Button from '@mui/material/Button'

const AuthorAdd = (props) => {
    const [authorName, setAuthorName] = useState(" ")
    const {authors, setAuthors} = props;
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()


    const submitHandler=(e)=>{
        e.preventDefault();
            axios.post('http://localhost:8000/api/authors',{
            authorName
            })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthorName("");
                setAuthors([...authors,res.data]);
                navigate('/authors');
            })
            .catch((err)=>{
                console.log(err.response.data.error.errors)
                setErrors(err.response.data.error.errors)
            })
            }

    const nameHandler=(e)=>{
        setErrors("")
        setAuthorName(e.target.value)
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
                    <p className="input-label">Add A New Author:</p><br/>
                            <label className="input-label"> Name:<br/>
                                {errors.authorName ? <p>{errors.authorName.message}</p>:null}
                                <input className="inputbox" type="text" label="Name" onChange={nameHandler} value={authorName} />
                            </label>
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

export default AuthorAdd