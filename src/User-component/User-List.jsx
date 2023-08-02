import './User-List.css'
import { Link } from 'react-router-dom'
import data from '../courses.json'
import { useState } from 'react'

const UserList = () => {

    const [userData , setUserData] = useState(data)

    const userdataDelete=(id)=>{
           console.log(id)
           const filterdata = data.filter((values)=>{
                  return values._id !== id

           })
           setUserData(filterdata);
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
                                <td><button onClick={()=>userdataDelete(value._id)}>Delete</button></td>
                            </tr>
                            ))
                      }
                </tbody>
            </table>
        </div>
    )
}

export default UserList