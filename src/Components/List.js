import React from "react";

const List = (props) => {
  return (
    <div className={'parametersList'}>
      <div className={'parametersItem rank'}>{props.rank }</div>
      <div className={'parametersItem symbol'}>{props.symbol}</div>
      <div className={'parametersItem title'}>{props.title}</div>
      <div className={'parametersItem price'}>{`${Number(props.price).toFixed(5)} $`}</div>
      <div className={'parametersItem changing'}>{`${Number(props.changing).toFixed(5)} $`}</div>
    </div>
  )
}

export default List;