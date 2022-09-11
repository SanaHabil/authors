import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const AuthorsList = () => {
    const [authors,setAuthors] = useState([])
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const {id} = useParams();
    
    const deleteHandler = (id) => {
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then((res) => {
                // console.log(res)
                navigate(`/authors`)
            })
            .catch((err) => console.log(err))
    } 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
        .then((res)=>{
            setAuthors(res.data.authors)
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors)
            setErrors(err.response.data.error.errors)
        })
    },[authors])



return (
    <div className="container">
        <div className="">
            <h1>Favorite Authors</h1>
            <Link className="linkClass" to="/authors/add">Add An Author</Link>
            <p className="p-purple">We Have Quotes By:</p>
        </div>
        <div className="tableDiv">
            <table>
                <tbody>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                    {
                        authors.map((item,idx)=>(
                            
                            <tr key={idx}>
                                <td>{item.authorName}</td>
                                    <td >
                                        <div>
                                            <button className="btn" onClick={()=>navigate(`/authors/edit/${item._id}`) }>Edit</button>
                                            <button className="btn" onClick={deleteHandler}>Delete</button>
                                        </div>
                                    </td>
                            </tr>
                                    ))
                    }
                </tbody>  
            </table>
        </div> 
    </div>
)
}

export default AuthorsList