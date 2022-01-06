import React from "react";
//axios 생성
import axios from "axios";
import Movie from "./Movie";


class App extends React.Component{
  
  state = {
    isLoading: true,
    movies: [],
  }

  // constructor(props) {
  //   super(props);
  //   console.log('생성자 안');
  // }

  getMovie = async () =>{
    const{
      data:{
        //
        data:{movies},
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading: false});
  }


  //render가 실행되고 난 뒤에 마지막에 실행이됨
  componentDidMount() {
    console.log('component 함수 안');
    this.getMovie();
  }

  //만약 기존의 state 값과 달리 바뀌었으면 -로 바뀜
  componentDidUpdate() {
    console.log('componentDidUpdate 함수 안');
  }

  // state = {
  //   count : 0,
  // }

  //기존의 state 값은 건들지 않음
  // add = () =>{
  //   //state 값을 조정함.
  //   this.setState(current =>({
  //     count: current.count + 1
  //   }));
  // }

  // minus = () => {
  //   this.setState(current =>({
  //     count: current.count - 1
  //   }));
  // }
  //생성자 느낌
  render() {
    const{isLoading, movies} = this.state;
  return (

  <section className="container">
    {/* 삼항연산자로 처음 isLoading 값이 거짓이었다가, async await 비동기 함수 getMovies로 나중에 들고 옴    */}
    {/*여기에서 json 값을 찾아서 들어감 */}
    {isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading</span>
      </div>
    ) :(      
      <div className="movies">
        {movies.map((movie) =>{          
          return <Movie 
          key={movie.id}
          id ={movie.id}
          title={movie.title}
          year={movie.year}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          />
        })
        }
      </div>
    )}
  </section>
    
  );
  }
}

export default App;
