import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
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
      },
      {
        id: 4,
        title: "Catch Me If You Can",
        description: "Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.",
        genre:{
          name: "Crime/Drama",
          description: "Crime fiction, detective story, murder mystery, mystery novel, and police novel are terms used to describe narratives that centre on criminal acts and especially on the investigation, either by an amateur or a professional detective, of a crime."
        },
        director:{
          name: "Steven Spielberg",
          bio: "Steven Allan Spielberg born December 18, 1946) is an American film director, writer and producer.",
          birthYear: 1946
        },
        ImagePath: "https://en.wikipedia.org/wiki/Catch_Me_If_You_Can#/media/File:Catch_Me_If_You_Can_2002_movie.jpg"
      },
      {
        id: 5,
        title: "Ray",
        description: "The story of the life and career of the legendary rhythm and blues musician Ray Charles, from his humble beginnings in the South, where he went blind at age seven, to his meteoric rise to stardom during the 1950s and 1960s.",
        genre:{
          name:"Biographical Muscial Drama",
          description:"A musical biography typically develops in a way similar to a realistic novel—a coherent, unified voice claims to present the truth about a life, while omniscient narration, repeating themes and symbols, and a linear chronological presentation of events provide readers with the illusion of totality and closure."
        },
        director:{
          name:"Taylor Hackford",
          bio:"Taylor Edwin Hackford (born December 31, 1944) is an American film director and former president of the Directors Guild of America.",
          birthYear:1944
        },
        imagePath:"https://en.wikipedia.org/wiki/Ray_(film)#/media/File:Ray_poster.jpg"
      },
      {
        id: 6,
        title:"The Pursuit of Happyness",
        description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
        genre:{
          name:"Biography Drama",
          description:"A film that dramatizes the life of a non-fictional or historically-based person or people."
        },
        director:{
          name: "Gabriele Muccino",
          bio: "Gabriele Muccino (born 20 May 1967) is an Italian film director. He has worked his way from making short films only aired on Italian television to become a well-known and successful American filmmaker.",
          birthYear: 1967
        },
        ImagePath:"https://www.imdb.com/title/tt0454921/"
      },
      {
        id: 7,
        title:"Seven Pounds",
        description:"Seven Pounds is a 2008 American drama film directed by Gabriele Muccino starring Will Smith as a man who sets out to change the lives of seven people.",
        genre:{
          name: "Drama",
          description: "Drama Films are serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature."
        },
        director:{
          name: "Gabriele Muccino",
          bio:"Gabriele Muccino (born 20 May 1967) is an Italian film director. He has worked his way from making short films only aired on Italian television to become a well-known and successful American filmmaker.",
          birthYear: 1967
        },
        ImagePath: "https://www.imdb.com/title/tt0814314/mediaviewer/rm202347520/?ref_=tt_ov_i"
      },
      {
        id: 8,
        title: "Crazy Rich Asians",
        description:"The story follows a Chinese-American professor who travels to meet her boyfriend's family and is surprised to discover they are among the richest in Singapore.",
        genre:{
          name: "Romantic Comedy-Drama",
          description:"A subgenre of comedy and slice of life fiction, focusing on lighthearted, humorous plot lines centered on romantic ideas, such as how true love is able to surmount most obstacles."
        },
        director:{
          name: "Jon M. Chu",
          bio: "Jonathan Murray Chu (born November 2, 1979)is an American film director, producer, and screenwriter. He is best known as the director of 2018's Crazy Rich Asians, the first film by a major Hollywood studio to feature a majority cast of Asian descent in a modern setting since The Joy Luck Club in 1993.",
          birthYear: 1979
        },
        imagePath:"https://en.wikipedia.org/wiki/Jon_M._Chu#/media/File:Jon_M._Chu_2013.jpg"
      },
      {
        id: 9,
        title: "Get Out",
        description: "Get Out is a 2017 American psychological horror film written, co-produced, and directed by Jordan Peele in his directorial debut. It stars Daniel Kaluuya, Allison Williams, Lil Rel Howery, LaKeith Stanfield, Bradley Whitford, Caleb Landry Jones, Stephen Root, and Catherine Keener. The plot follows a young black man (Kaluuya), who uncovers shocking secrets when he meets the family of his white girlfriend (Williams).",
        genre:{
          name: "Horror",
          description: "Motion picture calculated to cause intense repugnance, fear, or dread."
        },
        director:{
          name: "Jordan Peele",
          bio: "Jordan Haworth Peele (born February 21, 1979) is an American actor, comedian, and filmmaker. He is best known for his film and television work in the comedy and horror genres.[1][2] Peele started his career in sketch comedy before transiting his career as a writer and director of psychological horror and satirical films. In 2017, Peele was included on the annual Time 100 list of the most influential people in the world.",
          birthYear: 1979
        },
        imagePath: "https://en.wikipedia.org/wiki/Get_Out#/media/File:Get_Out_poster.png"
      },
      {
        id: 10,
        title: "Black Panther",
        description: "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU).",
        genre:{
          name: "Action/Adventure",
          description: "Featuring characters involved in exciting and usually dangerous activities and adventures"
        },
        director:{
          name: "Ryan Coogler",
          bio: "Ryan Kyle Coogler (born May 23, 1986)[1] is an American filmmaker. He is a recipient of four NAACP Image Awards, four Black Reel Awards, a Golden Globe Award nomination, and two Academy Award nominations.",
          birthYear: 1986
        },
        imagePath: "https://en.wikipedia.org/wiki/Black_Panther_(film)#/media/File:Black_Panther_(film)_poster.jpg"
      }
    ]);

  const [selectedmovie, setSelectedmovie] = useState(null);

  if (selectedmovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movies) => (
        <MovieCard
        key={movie.id}
        movie={movie}
        onMovieClick={(newSelectedMovie) => {
          setSelectedMovie(newSelectedMovie);
        }}
      />
      ))}
    </div>
  );
}