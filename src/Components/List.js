import React from "react";

const List = (props) => {

  return (
    <div className={'parameters_list'}>
      <div className={'parameters_item'}>{props.Rank}</div>
      <div className={'parameters_item'}>{props.Symbol}</div>
      <div className={'parameters_item'}>{props.Title}</div>
      <div className={'parameters_item'}>{props.Price}</div>
      <div className={'parameters_item'}>{props.Changing}</div>
    </div>
  )
}

export default List;