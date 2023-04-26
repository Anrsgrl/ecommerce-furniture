import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 7000)
    }, [navigate])
    return (
        <div className="not-found page-container d-flex flex-column justify-content-center align-items-center">
            <h1 className='text-center p-5'>NOT FOUND</h1>
            <button class="btn btn-primary text-center mb-4 p-1 w-50" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                You are sending to home page
            </button>
        </div>
    )
}

export default NotFound