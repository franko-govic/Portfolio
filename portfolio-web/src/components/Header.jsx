

function Header() {
  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="flex justify-between gap-10">
      <div className="px-5 py-3">
        LOGO
      </div>
      <ul className="flex gap-3 px-5 py-3">
        {navItems.map((item, key) => <li><a key={key} href="/"></a>{item}</li>)}
      </ul>
    </div>
  )
}

export {Header} 