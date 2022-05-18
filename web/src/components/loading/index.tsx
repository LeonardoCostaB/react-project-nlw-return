import'./style.scss'

import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="loading">
      <CircleNotch weight="bold" className="icon-loading"/>
    </div>
  )
}