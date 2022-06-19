import React from "react";

const List = (props) => {
  return (
    <div className={'parametersList'}>
      <div className={'parametersItem rank'}>{props.Rank }</div>
      <div className={'parametersItem symbol'}>{props.Symbol}</div>
      <div className={'parametersItem title'}>{props.Title}</div>
      <div className={'parametersItem price'}>{props.Price}</div>
      <div className={'parametersItem changing'}>{props.Changing}</div>
    </div>
  )
}

export default List;