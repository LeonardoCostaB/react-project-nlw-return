import { useState } from 'react'

import './style.scss'

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'

import { CloseButton } from '../close-button'
import { FeedbackTypeStep } from './steps/feedbackTypeStep'
import { FeedbackContentStep } from './steps/feedbackContentStep'
import { FeedbackSucessStep } from './steps/feedbackSucessStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    img: {
      src: bugImageUrl,
      alt: 'Imagem de uma minhoca',
    }
  },

  IDEA: {
    title: 'Ideia',
    img: {
      src: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    }
  },

  OTHER: {
    title: 'Outro',
    img: {
      src: thoughtImageUrl,
      alt: 'Imagem de um balão de conversa',
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [ feedbackType, setFeedbackType ] = useState<FeedbackType | null>(null)
  const [ feedbackSend, setFeedbackSend ] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSend(false)
    setFeedbackType(null)
  }

  return(
    <div className="widget-form">
      { feedbackSend ? (
        <FeedbackSucessStep 
          onChangeRestartFeedback={handleRestartFeedback}
        />
      ) : (
        <>
          { !feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
          ) : (
            <FeedbackContentStep 
              feedbackType={feedbackType}
              onChangeRestartFeedback={handleRestartFeedback}
              onFeedbackSend={() => setFeedbackSend(true)}
            />
          )}
        </>
      )
      }


      <footer className="widget-footer">
        Feito com ♥ pela <a href="https://rocketseat.com.br" target="_black">Rocketseat</a>
      </footer>
    </div>
  )
}