import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard() {
    return (
        <div className="col-lg-6 col-sm-12 mt-5">

            <Link to="/blog/name" className="text-dark">
            <div className="w-100">
                <img alt="blog" className="w-100 blog-image" height="300px" src="https://blog.morethanmetrics.com/wp-content/uploads/2020/05/customer-support-staff-ready-for-work-1024x683.jpg" />
            </div>
            <div className="blog-content mt-3">
                <h2>Lorem Epsum is a dummy text</h2>
                <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
            </div>
            <div className="blog-footer">
                <p className="lead">March 12 2020</p>
            </div>
        </Link>
        </div>

    )
}
