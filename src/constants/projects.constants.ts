import {movie1Img, superHeroesImg} from '../assets';
import {movieDBSite, movieGitHub, superHeroes} from './links.constants';

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
   projectSite: superHeroes.superHeroesSite,
   img: superHeroesImg,
   alt: 'superHeroes',
   title: 'Super Heroes WebSite',
   listTechnologies: ['HTML', 'CSS', 'React.js', 'Typescript', 'Redux Toolkit', 'Git', 'NPM', 'NodeJs', 'Express', 'MongoDb'],
   gitHub: superHeroes.superHeroesGitHub,
   info: [
      {'React': 'I used various libraries and hooks for convenient website development.'},
      {'Redux Toolkit': 'It was necessary to create different slices and facilitate state management.'},
      {'TypeScript': 'TypeScript: I utilized it to ensure strict typing in the code and to avoid issues with different data types.'},
      {'Express': 'I used it for developing the BackEnd part.'},
      {'MongoDb': 'Created a cloud database to store data about our registered heroes.'},
   ]
};

export {
   movieDB,
   superHeroesInfo
};