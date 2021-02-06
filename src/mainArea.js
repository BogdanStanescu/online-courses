import React from 'react'
import './mainArea.css'

function mainArea() {
    return (
        <div className="main__area">
            <div className="app__header">
                <div className = "app__title">
                    <h2>Courses</h2>
                </div>

                <div className = "app__headerOptions">
                    <ul>
                        <li><a href="#"> Popular </a></li>
                        <li><a href="#"> Favorite </a></li> 
                        <li><a href="#"> New </a></li>
                    </ul>
                </div>


            </div>



            <div className="course__images">
                    <img src="https://i1.wp.com/worldscholarshipforum.com/wp-content/uploads/2019/01/edx-vs-udemy.jpeg?fit=820%2C460&ssl=1" alt="Online Course" />
                    <img src="https://teaching.temple.edu/sites/teaching/files/styles/featured_image/public/edvice/e-learning2.png?itok=5k8XlikG&c=2ce558713a25e2f5d90f8c11f8047eff" alt="Online Course" />
                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/online-3412473_1920_1.jpeg?tz.RfsTe_UTLHiDqxmpG7PY_nTIBjwF7" alt="Online Course" />
            </div>


        </div>
    )
}

export default mainArea
