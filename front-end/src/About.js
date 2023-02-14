import './About.css'

/**
 * A React component that renders the About page.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form
 */
const About = props => {
  return (
    <>
      <h1>About Us</h1>
      <p>
        My name is Darren Le and I am currently a senior at New York University
        majoring in Computer Science and Economics. I'm an international student
        and aspiring software developer from Vietnam and have been in the United
        States for 4 years.
      </p>
      <p>
        I am proficient in Python, Java, C, and Javascript as well as being
        familiar with multiple frameworks like React and Flask. I have
        experience working as a front-end developer and am currently working on
        becoming a full-time data engineer post-graduation.
      </p>
      <p>
        In my free time, I enjoy playing video games, watching movies, and going
        jogging.
      </p>
    </>
  )
}

export default About
