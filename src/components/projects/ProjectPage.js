import React from "react"
import { Header1 } from '../theme/Texts'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../footer/Footer'



export default function ProjectPage ({location}) {
  const [ parsed, setParsed ] = React.useState(location.state.content)
  //to remove all tags: .replace( /(<([^>]+)>)/ig, '')


  React.useEffect(() => {
    setParsed(parsed.replace( /<p>/gi, '<p style=color:#212529;font-size:18px;font-family:RobotoMono;width:auto;max-width:680px;margin-left:auto;margin-right:auto;margin-top:32px;>').replace( /<h4>/gi, '<h4 style=color:#212529;font-family:RobotoMono;width:auto;max-width:680px;margin-left:auto;margin-right:auto;font-weight:800;margin-top:48px;font-size:22px;>').replace( /<h3>/gi, '<h3 style=color:#212529;font-family:RobotoMono;width:auto;max-width:680px;margin-left:auto;margin-right:auto;font-weight:800;margin-top:56px;>').replace( /<figure>/gi, '<figure style=width:auto;max-width:680px;margin-left:auto;margin-right:auto;display:flex;flex-wrap:wrap;align-items:center;margin-top:40px;>').replace( /<img/gi, '<img style=width:100%;max-width:680px;margin-left:auto;margin-right:auto;').replace( /<figcaption>/gi, '<figcaption style=color:#757575;font-family:RobotoMono;font-size:14px;width:100%;max-width:680px;margin-left:auto;margin-right:auto;font-weight:500;margin-top:12px;text-align:center;>').replace( /<blockquote>/gi, '<blockquote style=color:#757575;font-family:RobotoMono;font-size:28px;width:auto;max-width:680px;margin-left:auto;margin-right:auto;font-weight:500;margin-top:40px;padding-left:28px;>').replace( /<ul>/gi, '<ul style=color:#212529;font-family:RobotoMono;font-size:20px;width:auto;max-width:680px;margin-left:auto;margin-right:auto;font-weight:500;padding-left:28px;margin-top:40px;>').replace( /<li>/gi, '<li style=margin-top:12px;>').replace( /<ol>/gi, '<ol style=color:#212529;font-family:RobotoMono;font-size:20px;width:auto;max-width:680px;margin-left:auto;margin-right:auto;font-weight:500;padding-left:28px;margin-top:40px;>').replace( /<a/gi, '<a target="_blank"'))
  }, [])

  return(
    <div style={{marginTop: '64px'}}>
        <Header1 style={{width:'auto', maxWidth:'680px', marginLeft:'auto', marginRight:'auto'}}>{location.state.title}</Header1>
        <div dangerouslySetInnerHTML={{__html: parsed}} />

      <Footer />
    </div>
  )
}
