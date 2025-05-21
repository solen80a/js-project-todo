import { appContentStore } from "../stores/appContentStore"

export const Footer = () => {
  const {appContent} = appContentStore()
  

  return(
    <footer>
      <p>{appContent.footer}</p> 
      <a href={appContent.githubLink}>
        <img src={appContent.githubImg} alt={appContent.githubImgAlt} 
        target="_blank" />
      </a> 
    </footer>
  )
}