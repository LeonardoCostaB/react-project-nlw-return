import urlImageSucess from '../../../assets/success.svg'

import { CloseButton } from "../../close-button";

interface FeedbackSucessStepProps {
  onChangeRestartFeedback: () => void
}

export function FeedbackSucessStep({ 
  onChangeRestartFeedback 
}: FeedbackSucessStepProps) {
  return (
    <>
      <header className="header-success">
        <CloseButton />
      </header>

      <div className="success">
        <div className="title-success">
          <img
            src={urlImageSucess}
            alt="Imagem de sucesso"
          />

          <h3>
            Agradecemos o feedback
          </h3>
        </div>

        <button
          type="button"
          onClick={onChangeRestartFeedback}
        >
          Quero enviar outro    
        </button>
      </div>
    </>
  )
}
