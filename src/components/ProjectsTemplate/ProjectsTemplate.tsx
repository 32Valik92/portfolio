import './ProjectsTemplate.css';

import React, {FC} from 'react';

import {IProject} from '../../interfaces';

interface IProps {
    projectInfo: IProject
}

const ProjectsTemplate: FC<IProps> = ({projectInfo}) => {
   const {projectSite, img, alt, listTechnologies, title, gitHub, info,} = projectInfo;

   // Function for move to GitHub
   function moveGitHub(link: string): void {
      window.open(link, '_blank');
   }

   return (
      <div className={'project'}>

         <div className={'projectImgAndList'}>

            <div className={'projectImg'}>
               <a href={projectSite} target='_blank' rel="noreferrer">
                  <img
                     src={img}
                     alt={alt}
                  />
                  <div className="overlay">GO TO WEBSITE</div>
               </a>
            </div>

            <div className={'titleAndTechno'}>
               <h2>{title}</h2>

               <div className={'listTechnologies'}>
                  <ul className={'list'}>
                     {listTechnologies.map((item, index) => <li key={index + 1}>{item}</li>)}
                  </ul>
               </div>

               <div className={'buttonGit'}>
                  <a type={'button'} onClick={() => moveGitHub(gitHub)} className={'containerGit button'}>
                     <span className={'button__line button__line--top'}></span>
                     <span className={'button__line button__line--right'}></span>
                     <span className={'button__line button__line--bottom'}></span>
                     <span className={'button__line button__line--left'}></span>
                            GitHub
                  </a>
               </div>

            </div>

         </div>

         <div className={'movieDbInfo'}>
            <ul>
               {info.map((item, index) =>
                  <li key={index + 1}>
                     {Object.keys(item)[0] + ': ' + Object.values(item)[0]}
                  </li>)}
            </ul>
         </div>
      </div>
   );
};

export {ProjectsTemplate};