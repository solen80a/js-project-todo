import { appContentStore } from "../stores/appContentStore"

export const Footer = () => {
  const {appContent} = appContentStore()
  

  return(
    <footer>
      
      <a href={appContent.githubLink}>
        <img src={appContent.githubImg} alt={appContent.githubImgAlt} 
        target="_blank" />
      </a> 
      <p>{appContent.footer}</p> 
    </footer>
  )
}