export default function Instum() {
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

        <div className="bg-[#E6E1D3] pt-24 flex flex-col items-center">
              <img src="/imgcas.jpeg" alt=""  className="px-6 mt-10"/>

              <div className="px-6 text-justify">
                  <h1 className="font-semibold text-center text-2xl py-6">Casa do Migrante - Missão Paz</h1>

                  <div className="flex flex-col gap-4 mb-20 text-lg">
                      <p>A Casa do Migrante é o abrigo da Missão Paz, uma instituição filantrópica vinculada aos Missionários de São Carlos (Scalabrinianos), que atua no acolhimento e apoio a migrantes e refugiados desde os anos 1930 na região do Glicério, em São Paulo, Brasil. A Casa do Migrante permite a permanência de apátridas, imigrantes, solicitantes de refúgio e refugiados de acordo com as suas necessidades individuais.</p>

                      <p>Endereço: Rua Glicério, 225 - Liberdade - São Paulo/SP</p>

                      <p>Telefone: (11) 3340-6950</p>

                      <p>Email: contato@missaonspaz.org</p>

                      <p>Site oficial: <span className="text-[#00A8FF]"><a href="https://missaonspaz.org/casa-do-migrante/">missaonspaz.org</a></span></p>
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