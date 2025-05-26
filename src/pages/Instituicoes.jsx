export default function Instituicoes() {
  return (
    <section className="">

        <section id="special" className="fixed z-40 w-full flex h-screen text-white hidden">

            <div className="w-[60%] bg-black flex flex-col text-xl gap-5 pl-8 pt-6 font-semibold">
              <button onClick={hideMenu} className="pr-52"><p>x</p></button>

              <a href="/">Home</a>
              <a href="Instituicoes">Instituições</a>
              <a href="Formulario">Formulário</a>
            </div>

            <button onClick={hideMenu} className="w-[40%] bg-gray opacity-[50%]"><div ></div></button>

        </section>

        <button onClick={showMenu} className="fixed z-20 mt-4 ml-5 xl:hidden">
            <img src="/menu.svg" alt="" className="h-16"/>
        </button>

        <header className="flex w-screen bg-black fixed items-center justify-center xl:justify-between xl:px-44">
            <div>
              <a href="/">
                <img src="/logo.svg" alt="" className="h-24" />
              </a>
            </div>

            <div className="text-white max-xl:hidden text-lg font-semibold flex gap-16">
              <a href="/">Home</a>
              <a href="Instituicoes">Instituições</a>
              <a href="Formulario">Formulário</a>
            </div>
        </header>

      <div className="bg-[#E6E1D3] pt-24 flex flex-col items-center">
          <h1 className="font-bold text-3xl py-8 px-8 text-center">Instituições Registradas</h1>

          <section className="px-7 flex flex-col gap-8 mb-10">
            <a href="Casa-do-migrante" className="px-4 bg-[#BEBEBE] py-4 rounded-xl flex flex-col pb-3 items-center font-semibold">
              <img src="/missaopaz.svg" alt="" className="pb-2 rounded-xl" />

              <h2>Casa do migrante - Missão Paz</h2>
            </a>
            
            <a href="Banco-de-alimentos" className="px-4 bg-[#BEBEBE] py-4 rounded-xl flex flex-col pb-3 items-center font-semibold">
              <img src="/banco.svg" alt="" className="pb-2 rounded-xl" />

              <h2>Banco de Alimentos</h2>
            </a>
            
            <a href="/Good-truck" className="px-4 bg-[#BEBEBE] py-4 rounded-xl flex flex-col pb-3 items-center font-semibold">
              <img src="/goodt.svg" alt="" className="pb-2 rounded-xl" />

              <h2>GoodTruck Brasil</h2>
            </a>
            
            <a href="Formulario" className="px-4 bg-[#BEBEBE] py-4 rounded-xl flex flex-col pb-3 items-center font-semibold">
              <img src="/mais.svg" alt="" className="pb-2 rounded-xl" />
            </a>
          </section>
      </div>
    </section>
  )
}

function showMenu() {
    document.getElementById('special').classList.remove("hidden")
}
  
function hideMenu() {
  document.getElementById('special').classList.add("hidden")
}