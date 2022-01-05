import React from 'react';
import axios from 'axios';
import Movie from './movie'
import './App.css'


class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  //화면이 변하면 componentDidUpdate가 제일 마지막에 실행
  //제일 마지막에 실행됨  

  //시간이 필요해 async (언지를 줌)
  //진짜 기다려야 할 대상에는 await를 넣음
  getMovies = async() => {
    //객체 속성으로 들어감
    const{
      data :{
        data :{movies},
      }
    }= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //State 값을 변경해줌. 기존 값 변경
    this.setState({movies, isLoading:false});
  }
  componentDidMount(){
    // setTimeout(() => {
    //   //setState 값에 접근하기 위해서 
    //   this.setState({ isLoading : false});
    // }, 2000);
    this.getMovies();
  }
  
  render() {    
    //isLoading이라는 키 값에 담음
    const {isLoading, movies} = this.state;
    return (      
      <section class="container">{isLoading ? (
        <div class="loader">
          <span class="loader__text">Loading</span>
        </div>
      ) : 
      (<div class="movies">
        {movies.map((movie)=>{        
        return <Movie 
        key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />;
      })}
      </div>)
      }</section>
    );
  }
}

export default App;
