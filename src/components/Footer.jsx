function Footer() 
{ 
    return ( 
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8"> 
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row"> <p className="text-sm text-slate-500"> © {new Date().getFullYear()} Dimie Egberipou. All rights reserved. </p> 
            <div className="flex items-center gap-6"> 
                <a href="https://github.com/Dee68" target="_blank" rel="noreferrer" className="text-sm text-slate-400 transition hover:text-white" > GitHub </a> 
                <a href="#home" className="text-sm text-slate-400 transition hover:text-white" > Back to top ↑ </a> 
            </div> 
        </div> 
    </footer> ) 
} export default Footer