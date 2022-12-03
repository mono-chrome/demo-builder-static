function Header() {
  return (
    <section className="title-section">
      <h1>Website Title</h1>
    </section>
  ); 
}

function Footer() {
  return (
    <section className="footer-section">
      <h4>Footer Section</h4>
      <footer>
        <div> Item 1 </div>
        <div> Item 2 </div>
        <div> Item 3 </div>
      </footer>
    </section>
  ); 
}

export default function Layout({ children } : any) {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}