import React from 'react'
import { useEffect, useState } from 'react'

export default function Next() {

    const [data, setData] = useState([{
        fullname: '',
        email: '',
        username: ''
    }])

    useEffect(() => {
        fetch("http://localhost:3001/next").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setData(jsonRes));
        // console.log(data)
    })
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Serial No.</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            {data.map(val =>
                <tbody >
                    <tr>
                        <th scope="row">{data.indexOf(val)+1}</th>
                        <td>{val.fullname}</td>
                        <td>{val.email}</td>
                        <td>{val.username}</td>

                    </tr>
                </tbody>
            )}
        </table>
    )
}
