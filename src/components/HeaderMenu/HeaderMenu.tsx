import React, {FC} from 'react';


interface IProps {
    isMenuShow: boolean;
    setIsMenuShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMenu: FC<IProps> = ({isMenuShow, setIsMenuShow}) => {

   const hiddenMenu = (): void => setIsMenuShow(!isMenuShow);
   console.log(isMenuShow);
   return (
      <div className={`menu ${isMenuShow ? 'show' : 'hidden'}`}>
         <div onClick={hiddenMenu}><a href={'#aboutMe'}>ABOUT</a></div>
         <div onClick={hiddenMenu}><a href={'#skills'}>SKILLS</a></div>
         <div onClick={hiddenMenu}><a href={'#projects'}>PROJECTS</a></div>
      </div>
   );
};

export {HeaderMenu};