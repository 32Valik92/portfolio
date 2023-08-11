import {faGithub, faInstagram, faLinkedin, faTelegram, faThreads} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {FC} from 'react';

const HeaderLinks: FC = () => {
   return (
      <ul>
         <li>
            <a href="https://github.com/32Valik92" target={'_blank'} rel="noreferrer">
               <FontAwesomeIcon icon={faGithub}/>
            </a>
         </li>

         <li>
            <a href="http://www.linkedin.com/in/valentyn-strukalo-07b747286" target={'_blank'}
               rel="noreferrer">
               <FontAwesomeIcon icon={faLinkedin}/>
            </a>
         </li>

         <li>
            <a href="https://www.instagram.com/strukkalo/" target={'_blank'} rel="noreferrer">
               <FontAwesomeIcon icon={faInstagram}/>
            </a>
         </li>

         <li>
            <a href="https://t.me/str_kl" target={'_blank'} rel="noreferrer">
               <FontAwesomeIcon icon={faTelegram}/>
            </a>
         </li>

         <li>
            <a href="https://github.com/32Valik92" target={'_blank'} rel="noreferrer">
               <FontAwesomeIcon icon={faThreads}/>
            </a>
         </li>
      </ul>
   );
};

export {HeaderLinks};