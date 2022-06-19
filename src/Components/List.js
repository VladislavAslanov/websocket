import React from "react";

const List = (props) => {
  return (
    <div className={'parametersList'}>
      <div className={'parametersItem rank'}>{props.Rank }</div>
      <div className={'parametersItem symbol'}>{props.Symbol}</div>
      <div className={'parametersItem title'}>{props.Title}</div>
      <div className={'parametersItem price'}>{`${Number(props.Price).toFixed(5)} $`}</div>
      <div className={'parametersItem changing'}>{`${Number(props.Changing).toFixed(5)} $`}</div>
    </div>
  )
}

export default List;