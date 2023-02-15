import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react';

function QrCode() {
    const [qrCode, setQrCode] = useState('');

    const inputChange = (e) => {
        setQrCode(e.target.value)
    }
    
  return (
    <div>
        <div>
            <h1>Qr Code Generator</h1>
            <input type="text" value={qrCode} onChange={inputChange} />
        </div>
        <QRCodeSVG value={qrCode} />
    </div>
  )
}

export default QrCode