export default function Home() {
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
            <h1 className="font-bold text-3xl py-8">O que é o projeto?</h1>

            <p className="px-10 text-justify pb-10">Neste site, reunimos diversas instituições que oferecem serviços comunitários voltados para imigrantes em situação de vulnerabilidade. Nosso objetivo é facilitar o acesso a informações importantes e confiáveis. Aqui, você encontrará uma lista de organizações que prestam apoio social, jurídico, psicológico e outros tipos de assistência. Você poderá consultar os serviços oferecidos, os endereços, formas de contato e outros detalhes essenciais para que possa buscar ajuda com segurança e dignidade. Tudo isso está disponível de forma acessível e organizada, em um só lugar.</p>
        </div>

        <div className="bg-black flex flex-col items-center text-white">
            <h1 className="font-bold text-3xl py-8">Quem nós somos?</h1>

            <p className="px-10 text-justify pb-10">Este projeto foi desenvolvido por nós, estudantes universitários da área de tecnologia, como parte de uma iniciativa acadêmica com foco no impacto social. Fomos desafiados a criar uma solução digital que contribuísse com a comunidade, e optamos por reunir, em um só lugar, informações úteis para imigrantes em situação de vulnerabilidade. Acreditamos no poder da informação e da solidariedade. Por isso, este site foi pensado com responsabilidade, empatia e compromisso social. Esperamos que ele seja uma ponte entre quem precisa de ajuda e quem pode oferecê-la. Caso queira ver sua instituição registrada no site, clique <span className="text-[#00A8FF]"><a href="/Formulario">aqui</a></span>.</p>
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