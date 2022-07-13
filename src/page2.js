import React from 'react'
import Btn from './test'
export default function page2() {
  return (
    <div style={{backgroundColor:"#1C1C1C",minHeight:"100vh", display:"flex", justifyContent:"center",alignItems:"center"}}>
    <div style={{position:"relative",backgroundColor:"#F5F7FB",padding:"2.5em 5.5em",overflowX:"hidden",overflow:"hidden",display:"flex",flexDirection:"column"}}>
            <div style={{display:"flex",rowGap:"1em", flexDirection:"column"}}>
                <span style={{borderBottom:"1px solid black", padding:"1em"}}>
                    <p>How would one say goodbye in Spanish?</p>
                    <div style={{display:"flex", columnGap:"2em"}}>
                        <div style={{backgroundColor:"#D6DBF5",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Adiós</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Hola</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Au Revoir</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Salir</div>
                    </div>

                </span>
                <span style={{borderBottom:"1px solid black", padding:"1em"}}>
                    <p>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</p>
                    <div style={{display:"flex", columnGap:"2em"}}>
                        <div style={{backgroundColor:"#D6DBF5",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Cabbage Patch Kids</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Transformers</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Care Bears</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Rubik’s Cube</div>
                    </div>
                </span>
                <span style={{borderBottom:"1px solid black", padding:"1em"}}>
                    <p>What is the hottest planet in our Solar System?</p>
                    <div style={{display:"flex", columnGap:"2em"}}>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Mercury</div>
                        <div style={{backgroundColor:"#D6DBF5",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Venus</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Mars</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Saturn</div>
                    </div>
                </span>
                <span style={{borderBottom:"1px solid black", padding:"1em"}}>
                    <p>In which country was the caesar salad invented?</p>
                    <div style={{display:"flex", columnGap:"2em"}}>
                        <div style={{backgroundColor:"#D6DBF5",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Italy</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Portugal</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Mexico</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>France</div>
                    </div>
                </span>
                <span style={{borderBottom:"1px solid black", padding:"1em"}}>
                    <p>How Many Hearts Does An Octopus Have?</p>
                    <div style={{display:"flex", columnGap:"2em"}}>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>One</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Two</div>
                        <div style={{backgroundColor:"#D6DBF5",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Three</div>
                        <div style={{border:"2px solid black",padding:"0.2em 1em", borderRadius:"2em", cursor:"pointer"}}>Four</div>
                    </div>
                </span>
                <span style={{alignSelf:"center"}}>
                    <Btn btnName="Check answers"/>
                </span>
                
            </div>
          
          <div style={{position:"absolute",transform:"translateX(-7.5em)",top:"43em"}}>
          <svg width="148" height="118" viewBox="0 0 148 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-5.55191 4.90596C35.9614 1.77498 82.2425 -9.72149 112.306 19.1094C145.581 51.0203 155.282 102.703 142.701 147.081C130.767 189.18 93.7448 220.092 51.8208 232.476C16.5281 242.902 -15.4332 218.605 -49.1007 203.738C-85.3375 187.737 -133.641 182.993 -145.741 145.239C-158.358 105.868 -132.269 64.5881 -103.064 35.3528C-77.7328 9.99541 -41.2727 7.60006 -5.55191 4.90596Z" fill="#DEEBF8"/>
            </svg>
          </div>
          <div style={{position:"absolute",transform:"translateX(39em)",bottom:"40em"}}>
          <svg width="158" height="141" viewBox="0 0 158 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4095 81.3947C35.1213 50.8507 -2.68211 21.7816 1.17274 -19.6933C5.4394 -65.599 39.8541 -105.359 82.4191 -123.133C122.797 -139.994 170.035 -130.256 205.822 -105.149C235.947 -84.0141 236.823 -43.8756 246.141 -8.27104C256.17 30.0508 282.521 70.8106 260.501 103.779C237.539 138.159 188.991 143.432 147.931 138.768C112.318 134.723 87.7505 107.677 63.4095 81.3947Z" fill="#FFFAD1"/>
            </svg>
          </div>
    </div>
</div>
  )
}
