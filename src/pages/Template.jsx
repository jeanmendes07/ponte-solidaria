export default function Unkowing() {
  return (
    <section className="">

        <section id="special" className="fixed z-40 w-full flex h-screen text-white hidden">

            <div className="w-[60%] bg-black flex flex-col text-xl gap-5 pl-8 pt-6 font-semibold">
              <button onClick={hideMenu} className="pr-52"><p>x</p></button>

              <a href="">Home</a>
              <a href="">Instituições</a>
              <a href="">Formulário</a>
            </div>

            <button onClick={hideMenu} className="w-[40%] bg-gray opacity-[50%]"><div ></div></button>

        </section>

        <button onClick={showMenu} className="fixed z-20 mt-4 ml-5">
            <img src="/menu.svg" alt="" className="h-16"/>
        </button>

        <header className="flex w-screen bg-black fixed items-center justify-center">
            <div>
              <a href="">
                <img src="/logo.svg" alt="" className="h-24" />
              </a>
            </div>
        </header>
    </section>
  )
}

function showMenu() {
    document.getElementById('special').classList.remove("hidden")
}
  
function hideMenu() {
  document.getElementById('special').classList.add("hidden")
}