import './style.scss'

import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

import { WidgetForm } from '../widget-form'

export function Widget() {
  return (    
    <Popover className="container">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="widget-button">
        <ChatTeardropDots className="widget-icon"/>

        <span className="text-feedback">
          <span></span>
          FeedBack
        </span>
      </Popover.Button>
    </Popover>
  )
}