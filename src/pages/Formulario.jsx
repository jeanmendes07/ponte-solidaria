export default function Formulario() {
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

        <button onClick={showMenu} className="fixed z-20 mt-4 ml-5">
            <img src="/menu.svg" alt="" className="h-16"/>
        </button>

        <header className="flex w-screen bg-black fixed items-center justify-center">
            <div>
              <a href="/">
                <img src="/logo.svg" alt="" className="h-24" />
              </a>
            </div>
        </header>

        <div className="bg-[#E6E1D3] pt-24 flex flex-col items-center px-10">
            <h1 className="font-bold text-3xl py-8">Formulário</h1>

            <p className=" text-center">Aqui você deve enviar os dados da sua instituição para análise, e se aprovado, adicionaremos ao site.</p>

            <form action="" className="w-full flex flex-col gap-4 py-6">
              <input type="text" placeholder="Nome da Instituição" className="text-center w-full py-6 rounded-xl border"/>

              <input type="text" placeholder="O que sua instituição faz?" className="text-center w-full py-6 rounded-xl border"/> 

              <input type="text" placeholder="Dados(Contato, localização, ect.)" className="text-center w-full py-6 rounded-xl border"/>

              <input type="text" placeholder="Porque quer sua instituição aqui?" className="text-center w-full py-6 rounded-xl border"/>

              <button className="bg-green text-white py-5 rounded-xl border border-black">Enviar</button>
            </form>
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