export default function Instdois() {
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
              <a href="/" className="transition-transform duration-300 xl:hover:scale-[1.3]">Home</a>
              <a href="Instituicoes" className="transition-transform duration-300 xl:hover:scale-[1.3]">Instituições</a>
              <a href="Formulario" className="transition-transform duration-300 xl:hover:scale-[1.3]">Formulário</a>
            </div>
        </header>

        <div className="bg-[#E6E1D3] pt-24 flex max-xl:flex-col items-center xl:flex xl:px-20 xl:justify-center">
              <img src="/Bancali.jpeg" alt=""  className="px-6 mt-10"/>

              <div className="px-6 text-justify xl:mt-14 xl:mb-20 xl:mt-20 2xl:mt-32 2xl:pb-32">
                  <h1 className="font-semibold text-center text-2xl py-6 mb-4 xl:text-5xl xl:font-bold">Banco de alimentos</h1>

                  <div className="flex flex-col gap-4 mb-10 text-lg xl:text-xl">
                      <p>A ONG Banco de Alimentos é uma organização sem fins lucrativos fundada em 1998 pela economista Luciana Chinaglia Quintão. Com sede em São Paulo, a instituição atua há mais de 25 anos na redução da fome por meio do combate ao desperdício de alimentos, promovendo a cidadania consciente e a educação nutricional.</p>

                      <p>Endereço: Rua Atibaia, 218 – Pacaembu. Cep: 01235-010</p>

                      <p>Telefone: (11) 3674-0080</p>

                      <p>Email: info@bancodealimentos.org.br</p>

                      <p>Site oficial: <span className="text-[#00A8FF]"><a href="https://bancodealimentos.org.br">bancodealimentos.org.br</a></span></p>
                  </div>

              </div>
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