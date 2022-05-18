import { feedbackTypes, FeedbackType } from ".."
import { CloseButton } from "../../close-button"

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <h4>
          Deixe seu feedback
        </h4>

        <CloseButton />
      </header>

      <div className="container-feedback">
        { Object.entries(feedbackTypes).map(([ key, value ]) => {
          return (
            <button
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
              className="select-feedback"
            >
              <img src={value.img.src} alt={value.img.alt} />

              <h5>
                {value.title}
              </h5>
            </button>
          )
        })
        }
      </div>
    </>
  )
}