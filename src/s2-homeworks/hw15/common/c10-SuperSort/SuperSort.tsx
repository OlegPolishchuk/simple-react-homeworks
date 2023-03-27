import React from 'react'
import ArrowUpIcon from "./../../assets/icons8-up-24.png"
import ArrowDownIcon from "./../../assets/icons8-down-arrow-24.png"
import NoArrowIcon from "./../../assets/icons8-minus-24.png"

// добавить в проект иконки и импортировать
// const downIcon = ArrowDownIcon
// const upIcon =  ArrowUpIcon
// const noneIcon = NoArrowIcon

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  if(sort == down){
    return up
  }else if (sort == up){
    return ""
  } else
    return down


  // sort: (click) => down (click) => up (click) => '' (click) => down ...
  // return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
  {
    sort, value, onChange, id = 'hw15',
  }
) => {
  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))}

  // const icon = sort === down
  //   ? downIcon
  //   : sort === up
  //     ? upIcon
  //     : noneIcon

  return (
    <span
      id={id + '-sort-' + value}
      onClick={onChangeCallback}
    >
            {/*сделать иконку*/}
      <img
        id={id + '-icon-' + sort}
        src={'/'}
      />

                   </span>
  )
}

export default SuperSort

