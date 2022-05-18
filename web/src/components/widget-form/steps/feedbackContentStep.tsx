import { FormEvent, useState } from "react";

import { FeedbackType, feedbackTypes } from "..";

import { CloseButton } from "../../close-button";
import { ArrowLeft } from 'phosphor-react'
import { ScreenshotButton } from "../screenshots-button";
import { api } from "../../../lib/api";
import { Loading } from "../../loading";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType,
  onChangeRestartFeedback: () => void,
  onFeedbackSend: () => void
}

export function FeedbackContentStep({ 
  feedbackType, 
  onChangeRestartFeedback,
  onFeedbackSend 
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [isSendingFeedback, setSendingFeedback] = useState(false)

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()

    setSendingFeedback(true)

    await api.post('/feedback', {
      type: feedbackType,
      comment,
      screenshot
    })

    onFeedbackSend()
  }

  return (
    <>
      <header>
        <button 
          className="button-back"
          onClick={onChangeRestartFeedback}
          type="button"
        >
          <ArrowLeft weight="bold" className="icon-back"/>
        </button>

        <span className="feedback-title">
          <img
            src={feedbackTypeInfo.img.src}
            alt={feedbackTypeInfo.img.alt}
            className="image-feedback-title"
          />

          <h4>
            { feedbackTypeInfo.title }
          </h4>
        </span>

        <CloseButton />
      </header>

      <form className="form-feedback" onSubmit={handleSubmitFeedback}>
        <textarea
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={event => setComment(event.target.value)}
        />

        <footer>
          <div className="container-footer">
            <ScreenshotButton 
              screenshot={screenshot}
              onScreenshotTook={setScreenshot}
            />

            <button
              type="submit"
              className="submit-feedback"
              disabled={comment.length === 0 || isSendingFeedback}
            >
              { isSendingFeedback ? <Loading /> : 'Enviar feedback' } 
            </button>
          </div>
        </footer>
      </form>
    </>
  )
}