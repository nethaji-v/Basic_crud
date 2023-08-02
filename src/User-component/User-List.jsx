import './User-List.css'
import { Link } from 'react-router-dom'
import data from '../courses.json'
import { useEffect, useState } from 'react'

const UserList = () => {

    const [userData , setUserData] = useState([])

    useEffect(()=>{
        setUserData(data)
    },[])


    const userdataDelete=(id, index)=>{
           console.log(id)
        //    const filterdata = data.filter((values)=>{
        //           return values._id !== id

        //    })
    const filterdatas = [...userData]

        filterdatas.splice(index,1);

        setUserData(filterdatas)
        
        

    }
    return (
        <div>
           
            <Link to={'/create'}> <button>Create</button></Link>
            <table className='tableStyles'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>CourseTitle</th>
                        <th>CourseCategory</th>
                        <th>CourseDescription</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                      {
                        userData.map((value,index)=>(
                            <tr key={value._id}>
                                <td>{index + 1}</td>
                                <td>{ value.courseTitle}</td>
                                <td>{value.courseCategory }</td>
                                <td>{ value.courseDescription}</td>
                                <td><button onClick={()=>userdataDelete(value._id, index)}>Delete</button></td>
                            </tr>
                            ))
                      }
                </tbody>
            </table>
        </div>
    )
}

export default UserList