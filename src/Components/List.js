import React from "react";

const List = (props) => {
  return (
    <div className={'parameters_list'}>
      <div className={'parameters_item rank'}>{props.Rank }</div>
      <div className={'parameters_item symbol'}>{props.Symbol}</div>
      <div className={'parameters_item title'}>{props.Title}</div>
      <div className={'parameters_item price'}>{props.Price}</div>
      <div className={'parameters_item changing'}>{props.Changing}</div>
    </div>
  )
}

export default List;