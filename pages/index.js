import { useState,  useRef } from 'react'
import html2canvas from 'html2canvas'
import styles from '../styles/ribbon.module.css'

export default function Home() {
  const [imageSrc, setImageSrc] = useState(null)
  const [imageSrc2, setImageSrc2] = useState(null)
  const [imageSrc3, setImageSrc3] = useState(null)
  const [ribbonText, setRibbonText] = useState('Lionel Messi')
  const [ribbonText2, setRibbonText2] = useState('101')
  const [ribbonText3, setRibbonText3] = useState('CF')
  const [ribbonText4, setRibbonText4] = useState('4')

  const divRef = useRef(null)

  const handleSave = async () => {
    if (!divRef.current) return
    const canvas = await html2canvas(divRef.current, {
      useCORS: true, // jika ada gambar dari luar domain
    })
    const imgData = canvas.toDataURL('image/jpeg', 1.0)

    const link = document.createElement('a')
    link.href = imgData
    link.download = 'output.jpg'
    link.click()
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setImageSrc(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleImageUpload2 = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setImageSrc2(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleImageUpload3 = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setImageSrc3(reader.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <main style={{ padding: '2rem' }}>
     <h3
      style={{
        marginBottom: '2rem',
        textAlign: 'center',
      }}
    >
      eFootball Card Generator
    </h3>

    <div className={styles.formGroup}>
      <div className={styles.inputRow}>
      <label style={{ display: 'flex', flexDirection: 'column' }}>
        POTW:
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </label>
      <label style={{ display: 'flex', flexDirection: 'column' }}>
        Epic/ Show Time:   
        <input type="file" accept="image/*" onChange={handleImageUpload2} />
      </label>
      <label style={{ display: 'flex', flexDirection: 'column' }}>
        Club logo:
        <input type="file" accept="image/*" onChange={handleImageUpload3} />
      </label>
      </div>

      {/* Input Text */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Nama:
          <input
            type="text"
            value={ribbonText}
            onChange={(e) => setRibbonText(e.target.value)}
            placeholder="Nama"
            maxLength={16}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Overall:
          <input
            type="number"
            value={ribbonText2}
            onChange={(e) => setRibbonText2(e.target.value)}
            placeholder="Overall"
            maxLength={3}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Position:
          <input
            type="text"
            value={ribbonText3}
            onChange={(e) => setRibbonText3(e.target.value)}
            placeholder="Position"
            maxLength={3}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Rating (1–5):
          <input
            type="number"
            value={ribbonText4}
            onChange={(e) => setRibbonText4(e.target.value)}
            placeholder="1–5"
            min="0"
            max="5"
            maxLength={1}
          />
        </label>
      </div>
    </div>

      <div
          style={{
            padding: '2px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
          }}
        >
      {imageSrc && (
        <div
        style={{
          flex: '1 1 250px',
          maxWidth: '250px',
          position: 'relative',
          height: '350px',
        }}
      >
        <div className={styles.container}>
          {/* Ribbon PNG */}
          <img
            src="/images/potw.png"
            alt="Ribbon"
            className={styles.ribbonImage}
          />

          {/* Teks overlay di atas ribbon */}
          <span className={styles.ribbonTextHijau}>{ribbonText}</span>
          <span className={styles.ribbonText2}>{ribbonText2}</span>
          <span className={styles.ribbonText3}>{ribbonText3}</span>
          <span className={styles.ribbonText4Hijau}>
            {'★'.repeat(parseInt(ribbonText4) || 0)}
          </span>
          <span className={styles.ribbonText5Hijau}>★★★★★</span>


          {/* Gambar hasil upload */}
          <img src={imageSrc} alt="" className={styles.image} />
          {/*<img src={imageSrc2} alt="" className={styles.image2} />*/}
          <img src={imageSrc3} alt="" className={styles.image3} />
        </div>
        </div>
      )}
      
      {/* ungu */}
      {imageSrc && (
        <div
        style={{
          flex: '1 1 250px',
          maxWidth: '250px',
          position: 'relative',
          height: '350px',
        }}
      >
        <div className={styles.container}>
          {/* Ribbon PNG */}
          <img
            src="/images/potwungunew.png"
            alt="Ribbon"
            className={styles.ribbonImage}
          />

          {/* Teks overlay di atas ribbon */}
          <span className={styles.ribbonText}>{ribbonText}</span>
          <span className={styles.ribbonText2}>{ribbonText2}</span>
          <span className={styles.ribbonText3}>{ribbonText3}</span>
          <span className={styles.ribbonText4}>
            {'★'.repeat(parseInt(ribbonText4) || 0)}
          </span>
          <span className={styles.ribbonText5}>★★★★★</span>


          {/* Gambar hasil upload */}
          <img src={imageSrc} alt="" className={styles.image} />
          {/*<img src={imageSrc2} alt="" className={styles.image2} />*/}
          <img src={imageSrc3} alt="" className={styles.image3} />
        </div>
        </div>
      )}

      {/* emas */}
      {imageSrc && (
        <div
        style={{
          flex: '1 1 250px',
          maxWidth: '250px',
          position: 'relative',
          height: '350px',
        }}
      >
        <div className={styles.container}>
          {/* Ribbon PNG */}
          <img
            src="/images/potwemas.png"
            alt="Ribbon"
            className={styles.ribbonImage}
          />

          {/* Teks overlay di atas ribbon */}
          <span className={styles.ribbonTextEmas}>{ribbonText}</span>
          <span className={styles.ribbonText2}>{ribbonText2}</span>
          <span className={styles.ribbonText3}>{ribbonText3}</span>
          <span className={styles.ribbonText4}>
            {'★'.repeat(parseInt(ribbonText4) || 0)}
          </span>
          <span className={styles.ribbonText5}>★★★★★</span>


          {/* Gambar hasil upload */}
          <img src={imageSrc} alt="" className={styles.image} />
          {/*<img src={imageSrc2} alt="" className={styles.image2} />*/}
          <img src={imageSrc3} alt="" className={styles.image3} />
        </div>
        </div>
      )}

      {/* epic */}
      {imageSrc && (
        <div
        style={{
          flex: '1 1 250px',
          maxWidth: '250px',
          position: 'relative',
          height: '350px',
        }}
      >
        <div className={styles.container}>
          {/* Ribbon PNG */}
          <img
            src="/images/epicribbon.png"
            alt="Ribbon"
            className={styles.ribbonImage}
          />

          {/* Teks overlay di atas ribbon */}
          <span className={styles.ribbonTextEpic}>{ribbonText}</span>
          <span className={styles.ribbonText2Epic}>{ribbonText2}</span>
          <span className={styles.ribbonText3}>{ribbonText3}</span>
          <span className={styles.ribbonText4Epic}>
            {'★'.repeat(parseInt(ribbonText4) || 0)}
          </span>
          <span className={styles.ribbonText5Epic}>★★★★★</span>


          {/* Gambar hasil upload */}
          <img
            src="/images/epicbackground.jpg"
            alt="Ribbon"
            className={styles.image}
          />
          <img src={imageSrc2} alt="" className={styles.imageEpic} />
          <img src={imageSrc2} alt="" className={styles.image2Epic} />
          <img src={imageSrc3} alt="" className={styles.image3} />
        </div>
        </div>
      )}

     {/* ST */}
     {imageSrc && (
      <div
      style={{
        flex: '1 1 250px',
        maxWidth: '250px',
        position: 'relative',
        height: '350px',
      }}
    >
      <div className={styles.container}>
        {/* Ribbon PNG */}
        <img
          src="/images/strb.png"
          alt="Ribbon"
          className={styles.ribbonImage}
        />

        {/* Teks overlay di atas ribbon */}
        <span className={styles.ribbonTextEpic}>{ribbonText}</span>
        <span className={styles.ribbonText2Epic}>{ribbonText2}</span>
        <span className={styles.ribbonText3}>{ribbonText3}</span>
        <span className={styles.ribbonText4Epic}>
          {'★'.repeat(parseInt(ribbonText4) || 0)}
        </span>
        <span className={styles.ribbonText5Epic}>★★★★★</span>


        {/* Gambar hasil upload */}
        <img
          src="/images/stbg.jpg"
          alt="Ribbon"
          className={styles.image}
        />
        <img src={imageSrc2} alt="" className={styles.image2Epic} />
        <img src={imageSrc3} alt="" className={styles.image3} />
      </div>
      </div>
    )}
      <p style={{
        marginBottom: '2rem',
        textAlign: 'center',
      }}>This project build for education purpose. For better display please use phone resolution. <br/>
          <span className="text-red-500">Built with ♡ by <a href="https://github.com/Ali-Hakeem">Ali-Hakeem</a></span>
      </p>
    </div>
  </main>
  )
}
