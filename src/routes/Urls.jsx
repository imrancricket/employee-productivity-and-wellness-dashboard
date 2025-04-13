import React from 'react'
import Dashboard from '../pages/Dashboard'
import Students from '../pages/Students'
import Courses from '../pages/Courses'
import Syllabus from '../pages/Syllabus'
import Subject from '../pages/Subject'
import StudyMaterial from '../pages/StudyMaterial'
import TimeTable from '../pages/TimeTable'
import Quiz from '../pages/Quiz'
import Slider from '../pages/Slider'
import Gallery from '../pages/Gallery'
import Notifications from '../pages/Notifications'
import Faq from '../pages/Faq'
import Logs from '../pages/Logs'
import Configs from '../pages/Configs'
import Staff from '../pages/Staff'

export const urls = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/feedback", element: <Students /> },
    { path: "/help-corner", element: <Courses /> },
    { path: "/physical-activities", element: <Syllabus /> },
    // { path: "/subject", element: <Subject /> },
    // { path: "/study-material", element: <StudyMaterial /> },
    // { path: "/time-table", element: <TimeTable /> },
    // { path: "/quiz", element: <Quiz /> },
    // { path: "/slider", element: <Slider /> },
    // { path: "/gallery", element: <Gallery /> },
    // { path: "/staff", element: <Staff /> },
    // { path: "/notification", element: <Notifications /> },
    // { path: "/faq", element: <Faq /> },
    // { path: "/logs", element: <Logs /> },
    // { path: "/config", element: <Configs /> }
]
