import React, { useState } from 'react';
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [selectedMovie, setSelectedMovie] = useState([
    {
      id: 1,
      title: "Coming to America",
      description: "An extremely pampered African prince travels to Queens, New York, and goes undercover to find a wife that he can respect for her intelligence and strong will.",
      genre:{
          name: "Romantic Comedy",
          description: "A movie or play that deals with love in a light, humorous way."
        },
        director:{
          name: "John Landis",
          bio: "John David Landis (born August 3, 1950)[1] is an American comedy, horror, and fantasy filmmaker and actor. He is best known for the comedy films that he has directed – such as The Kentucky Fried Movie (1977), National Lampoon's Animal House (1978), The Blues Brothers (1980), An American Werewolf in London (1981), Trading Places (1983), Three Amigos (1986), Coming to America (1988) and Beverly Hills Cop III (1994), and for directing Michael Jackson's music videos for Thriller (1983) and Black or White (1991).",
          birthYear: 1950
        },
         imagePath: "https://en.wikipedia.org/wiki/Coming_to_America#/media/File:ComingtoAmerica1988MoviePoster.jpg"
    },
    {
      id: 2,
      title: "Notebook",
      description: "A poor yet passionate young man (Ryan Gosling) falls in love with a rich young woman (Rachel McAdams), giving her a sense of freedom, but they are soon separated because of their social differences.",
      genre:{
        name:"Romantic Drama",
        description: "Romance films, romance movies, or ship films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the affectionate romantic involvement of the main characters."
        },
        director:{
          name: "Nick Cassavetes",
          bio: "Nicholas David Rowland Cassavetes (born May 21, 1959)[1] is an American actor, director, and writer. He has directed such films as She's So Lovely (1997), John Q. (2002), The Notebook (2004), Alpha Dog (2006), and My Sister's Keeper (2009). His acting credits include an uncredited role in Husbands (1970)—which was directed by his father, John Cassavetes—as well as roles in the films The Wraith (1986), Face/Off (1997), and Blow (2001).",
          birthYear: 1959
        },
        imagePath: "https://www.imdb.com/title/tt0332280/mediaviewer/rm1153669376/?ref_=tt_ov_i"
    },
    {
      id: 3,
      title: "Titanic",
      description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        genre:{
        name: "Romanctic Drama",
        description: "Romance films, romance movies, or ship films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the affectionate romantic involvement of the main characters."
        },
        director:{
          name: "James Cameron",
          bio: "James Francis Cameron CC (born August 16, 1954) is a Canadian filmmaker. A major figure in the post-New Hollywood era, he is considered one of the industry's most innovative filmmakers, regularly pushing the boundaries of cinematic capability with his use of novel technologies.",
          birthYear: 1954
        },
        imagePath:"https://en.wikipedia.org/wiki/Titanic_(1997_film)#/media/File:Titanic_(1997_film)_poster.png"
      }
    ]);
        
    if (selectedMovie) {
      return (
        <>
          <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
          <div>
            {selectedMovie.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={() => {
                  setSelectedMovie(movie);
                }}
              />
            ))}
          </div>
        </>
      );
    }
    
    return (
      <MainView onSelectMovie={movie => setSelectedMovie(movie)} />
    );