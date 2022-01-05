import React from 'react';
import ReactDOM from 'react-dom';
//App 컴포넌트를 ./App에서 가져와서 저렇게 부름
import App from './App';

//첫번째 인자는 <APP>, 두번째 인자는 그려질 공간 'root'

//아래와 같은 것을 JSX = HTML + JavaScript
//React는 최종적으로 하나의 컴포넌트만 그려야 함
ReactDOM.render(  
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

