import { create } from "zustand";

export const appContentStore = create (() => ({

appContent: {
  heading: "Yours ToDo ☠️",
  footer: "Created by Sofia Lennbom",
  githubLink: "https://github.com/solen80a/js-project-happy-thoughts",
  githubImg: "./assets/Btn - github.svg",
  githubImgAlt: "Github icon to access the code"
}

}))