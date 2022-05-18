import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

import './style.scss'


export function CloseButton() {
  return(
    <Popover.Button className="button-close">
      <X weight="bold" className="icon-close"/>
    </Popover.Button>
  )
}