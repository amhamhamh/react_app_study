import React from 'react';

//클라스 App은 React.Component를 상속함.
//상속받은 클라스 App은 render()함수 안에 JSX 문법을 적음
class App extends React.Component{
    //생성자(동적 데이트를 생성할 때 자주 사용함)
    state = {
        count : 0,
    }

    //클라스의 메소드
    add = () => {                  
        //this.setState({count: this.state.count + 1})
        //생성자에 있는 값에 접근하려면 setState({key : value})     
        //맵 함수에 적용함
        this.setState(current => ({
            count: current.count + 1
        }));
    }
    //클라스의 메소드
    minus = () => { 
        ///this.setState({count: this.state.count - 1})
        //생성자에 있는 값에 접근하려면 setState({key : value})     
        //맵 함수에 적용함
        this.setState(current => ({
            count: current.count - 1
        }))
    }
    //render함수를 통해서 출력하기 때문에 위에 처럼 하면 안됨
    //아래 부터 JSX 문법이 사용되는 곳
    render(){        
        return (            
        <div>
            <h1>The number is :  {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
        );       
    }
}

export default App;
