import './About.css'
import self_img from './self_img.JPG'
import { Link } from 'react-router-dom'

/**
 * A React component that renders the About page.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form
 */
const About = props => {
  return (
    <>
      <h1>About Us</h1>
      <div className="container">
        <div className="all-text">
          <p className="self-intro">
            My name is Quoc Anh Le, or Darren Le, and I am currently a senior at
            New York University majoring in Computer Science and Economics. I'm
            an international student and aspiring software developer from
            Vietnam and have been in the United States for 4 years, the first in
            my family to go to a foreign university.
          </p>

          <p className="self-intro">
            I am proficient in Python, Java, C, and Javascript as well as being
            familiar with multiple frameworks like React and Flask. I have
            experience working as a front-end developer and am currently working
            on becoming a full-time data engineer post-graduation.
          </p>

          <p className="self-intro">
            In my free time, I enjoy playing video games, watching movies, and
            going jogging. I also enjoy learning new things and am always open
            to new experiences.
          </p>

          <p className="self-intro">GitHub: https://github.com/DarrenLe20</p>
        </div>
        <Link to="/">
          <img src={self_img} alt="selfie" className="self-img" />
        </Link>
      </div>
    </>
  )
}

export default About
