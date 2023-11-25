export default function Header(parms){

    return(<header>
      <button onClick={()=>parms.refresh()}>Refresh</button>
    </header>)
  }