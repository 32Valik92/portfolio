import {movie1Img} from '../assets';
import {movieDBSite, movieGitHub} from './links.constants';

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

export {
   movieDB
};