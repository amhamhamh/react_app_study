import React from 'react';
import PropTypes from 'prop-types';

//컴포넌트를 부르는 방법 3가지

//첫번째 가져와서 접근하거나
// function Food(props){
//   //아래와 <Food fav="김치" something={true} papapa={['hello', 1, 2, 3, true ]}>
//   //이것이 매개변수로 전달이 됨.
//   //console.log(props);
//   return (<h3>나는 {props.fav}와 {props.side} 좋아해요</h3>);
// }

//두번째 직접 key값을 가져옴 하나일 경우
// function Food(props){
//   return (
//     <h3>나는 {props.fav}과 {props.side}을 좋아합니다.</h3>
//   );
// }


function Food({name, picture, rating}){
  return (    
    <div>
      <h1>I like  {name}가 좋아</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>    
    </div>
  );
}
const foodLike = [
  {
  id:1,
  name :'fireworks',
  image: './1.jpg',
  rating: 5
},
{
  id:2,
  name :'snow',
  image: './2.jpg',
  rating: 3.8
},{
  id:3,
  name :'sunset',
  image: './3.jpg',
  rating: 3.0
},{
  id:4,
  name :'snowMoutain',
  image: './4.jpg',
  rating: 4.0
},{
  id:5,
  name :'building',
  image: './5.jpg',
  rating: 2.0
}
];

//매개변수로 대입되는 값과 key값이 맞는지 확인
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
};


// const renderFood = (dish) => {
//   return <Food name={dish.name} picture={dish.image}/>;
// }
//해당 컴포넌트를 정의함
//index.js에서 반환하고 있음
function App() {
  //최종 하나의 컴포트(APP) 안에 다수의 컴포넌트를 넣을 수 있음  
  //1.다른 js 파일을 만들어서 정의 한 다음 불러냄
  //2.그냥 안에 따로 함수 컴포넌트를 만들어 그냥 넣음  
  return (
  <div> 
    <h1>Hello!!</h1>    
    {/*Prop으로 데이터 전달하기 - 불리언 값, 숫자, 배열, 다양한 형태의 데이터 담을 수 있음*/}
    {/*문자열을 제외하면 제외하면 모든 이와 같이 중괄호로 감싸 줘야 함{}*/}   
    {/* <Food fav="김치" something={true} papapa={['hello', 1, 2, 3, true ]}  */}
    
    {/*<함수 이름 key값:value key값:value>*/}
    {/* <Food fav="김치" side="쌀"/>
    <Food fav="보쌈" side="햇김치"/>
    <Food fav="햄버거" side="제로콜라"/> */}
    <div>
      {/* 함수를 실행시킬 때는 이런 방식으로 함 foodLike.map(renderFood)*/}
      {/* prop에 특수한 key 속성을 넣어줘야 함.다른 리액트에게 컴포넌트가 서로 다른 것을 구분하기 위한 것 */}
      {foodLike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
    {/* {foodLike.map(foodies => (
      <Food name={foodies.name} picture={foodies.image}/>
      ))} */}
  </div>);
}

export default App;