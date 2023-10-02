import EducationCard from './EducationCard'
import JobCard from './JobCard'
import SkillsPannel from './SkillsPannel'
import ColorPannel from './ColorPannel'
import InfoPannel from './InfoPannel'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { useRef } from 'react'

export default function CVDisplay ({ cvInfo, fontChoice, layoutChoice }) {
  const printRef = useRef(null)

  async function handleDownloadPdf () {
    const element = printRef.current
    const canvas = await html2canvas(element)
    const data = canvas.toDataURL('image/png')

    const pdf = new jsPDF()
    const imgProperties = pdf.getImageProperties(data)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('MyCV.pdf')
  }

  return (
    <>
      <div
        ref={printRef}
        className={'cvContainer ' + layoutChoice}
        style={fontChoice}
      >
        <ColorPannel layoutChoice={layoutChoice} cvInfo={cvInfo} />

        <InfoPannel
          infoArr={cvInfo.experience}
          infoType={'experience'}
          title={'Professional Experience'}
        />
        <InfoPannel
          infoArr={cvInfo.education}
          infoType={'education'}
          title={'Education'}
        />
        {layoutChoice === 'top' ? (
          <SkillsPannel layoutChoice={layoutChoice} cvInfo={cvInfo} />
        ) : (
          ''
        )}
      </div>
      <button
        type='button'
        onClick={handleDownloadPdf}
        className='downloadButton'
      >
        Download PDF
      </button>
    </>
  )
}
