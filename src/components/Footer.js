import hr from '../assets/curve-hr.svg'

export default function Footer(){
  return (
    <div className="mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <ul className="text-center">
        <li><a href="#home" className="hover:underline" rel="noreferrer">About</a></li>
        <li><a href="#skills" className="hover:underline" rel="noreferrer">Skills</a></li>
        <li><a href="#experience" className="hover:underline" rel="noreferrer">Experience</a></li>
        <li><a href="#projects" className="hover:underline" rel="noreferrer">Projects</a></li>
      </ul>

      <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />
      <p className="text-sm font-light text-center">Mark Babaylan. Original code from <a href="https://github.com/radendi/react-portfolio-2?ref=reactjsexample.com" target="_blank" rel="noreferrer" style={{textDecoration:"underline"}} >Damasukma Trihanandi</a></p>
      <p className="text-sm font-light text-center"><a target="_blank" style={{textDecoration:"underline"}} href="https://icons8.com/icon/rY6agKizO9eb/vue-js" rel="noreferrer">Vue Js</a> and <a target="_blank" style={{textDecoration:"underline"}} href="https://icons8.com/icons/set/salesforce-logo" rel="noreferrer">Salesforce</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a></p>

    </div>
  )
}
