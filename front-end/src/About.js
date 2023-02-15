import './About.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

/**
 * A React component that renders the About page.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form
 */
const About = props => {
  const [about_info, setAbout] = useState({})
  const [imgFile, setImgFile] = useState('')

  // set up loading About data from back-end server when the component first loads
  useEffect(() => {
    const fetchInfo = () => {
      fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
        .then(response => response.json())
        .then(data => {
          setAbout(data)
          setImgFile(data.img_src)
          console.log(about_info.img_src)
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchInfo()
  }, [])

  return (
    <>
      <h1>About Us</h1>
      <div className="container">
        <div className="all-text">
          <p className="self-intro">{about_info.p1}</p>
          <p className="self-intro">{about_info.p2}</p>
          <p className="self-intro">{about_info.p3}</p>
          <p className="self-intro">{about_info.p4}</p>
        </div>
        <img src={about_info.img_src} alt="selfie" className="self-img" />
      </div>
    </>
  )
}

export default About
