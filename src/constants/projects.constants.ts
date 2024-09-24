import {movie1Img, superHeroesImg, WordsAPIFormImg} from '../assets';
import {movieDBSite, movieGitHub, superHeroesLinks, WordsAPIFormLinks} from './links.constants';

const movieDB = {
   projectSite: movieDBSite,
   img: movie1Img,
   alt: 'Movies',
   title: 'Movie WebSite by MovieDB',
   listTechnologies: ['HTML', 'CSS', 'React.js', 'Typescript', 'Redux Toolkit', 'Git', 'NPM'],
   gitHub: movieGitHub,
   info: [
      {'React': 'I used various libraries and hooks for convenient website development.'},
      {'Redux Toolkit': 'It was necessary to create different slices and facilitate state management.'},
      {'TypeScript': 'TypeScript: I utilized it to ensure strict typing in the code and to avoid issues with different data types.'},
      {'TMDb API': 'A free API from which I fetched data for my project, and which updates daily.'},
   ]
};

const superHeroesInfo = {
   projectSite: superHeroesLinks.superHeroesSite,
   img: superHeroesImg,
   alt: 'superHeroes',
   title: 'Super Heroes WebSite (Frond + Back)',
   listTechnologies: ['HTML', 'CSS', 'React.js', 'Typescript', 'Redux Toolkit', 'Git', 'NPM', 'NodeJs', 'Express', 'MongoDb'],
   gitHub: superHeroesLinks.superHeroesGitHub,
   info: [
      {'React': 'I used various libraries and hooks for convenient website development.'},
      {'Redux Toolkit': 'It was necessary to create different slices and facilitate state management.'},
      {'TypeScript': 'TypeScript: I utilized it to ensure strict typing in the code and to avoid issues with different data types.'},
      {'Express': 'I used it for developing the BackEnd part.'},
      {'MongoDb': 'Created a cloud database to store data about our registered heroes.'},
   ]
};

const WordsAPIFormInfo = {
   projectSite: WordsAPIFormLinks.WordsAPIFormSite,
   img: WordsAPIFormImg,
   alt: 'WordsAPIForm',
   title: 'Words API Form',
   listTechnologies: ['HTML', 'CSS', 'Next.js', 'TypeScript', 'Git', 'NPM', 'WordsAPI'],
   gitHub: WordsAPIFormLinks.WordsAPIFormGitHub,
   info: [
      {'Next.js': 'This is my first project using Next.js, focusing on server-side rendering and API routes.'},
      {'TypeScript': 'I utilized TypeScript to ensure strict typing and avoid issues with different data types.'},
      {'WordsAPI': 'I integrated WordsAPI to fetch and display word information dynamically.'},
      {'ESLint': 'I configured ESLint for static code analysis to enforce best coding practices.'},
   ]
};


export {
   movieDB,
   superHeroesInfo,
   WordsAPIFormInfo
};