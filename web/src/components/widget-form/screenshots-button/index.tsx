import { useState } from "react";

import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";

import { Loading } from "../../loading";

interface ScreenshotButtonProps {
  screenshot: string | null,
  onScreenshotTook: (screenschot: string | null) => void
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {
  const [ isTalkingScreenshot, setIsTalkingScreenshot ] = useState(false)

  async function handleTakeScreenshots() {
    setIsTalkingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)

    setIsTalkingScreenshot(false)
  }

  if(screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotTook(null)}
        className="photo"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 188
        }}
      >
        <Trash weight="fill" className="icon-trash"/>
      </button>
    )
  }

  return (
    <button 
      className="screenschot"
      type="button"
      onClick={handleTakeScreenshots}
    >
      {
        isTalkingScreenshot ? <Loading /> : <Camera className="icon-screenschot"/>
      }
    
    </button>
  )
}