import { useEffect, useState } from 'react'
import { departments, steps, team } from './content.js'

const asset = (file) => `${import.meta.env.BASE_URL}images/${file}`

const navigation = [
  { label: 'Inici', href: '#/', page: 'inici' },
  { label: 'Empresa', href: '#/empresa', page: 'empresa' },
  { label: 'Procés', href: '#/proces', page: 'proces' },
  { label: 'Consultora', href: '#/consultora', page: 'consultora' },
  { label: 'Fonts', href: '#/fonts', page: 'fonts' },
]

const routeTitles = {
  inici: 'Inici', empresa: 'Empresa', proces: 'Procés',
  consultora: 'Consultora', fonts: 'Fonts',
}

function pageFromHash() {
  return navigation.find((item) => item.href === window.location.hash)?.page || 'inici'
}

function SectionHeading({ eyebrow, title, children, as: Heading = 'h2' }) {
  return (
    <div className="max-w-3xl">
      <p className="section-kicker">{eyebrow}</p>
      <Heading className="section-title">{title}</Heading>
      {children && <p className="section-lead">{children}</p>}
    </div>
  )
}

function Header({ page }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth > 850) setMenuOpen(false)
    }
    window.addEventListener('resize', closeMenuOnDesktop)
    return () => window.removeEventListener('resize', closeMenuOnDesktop)
  }, [])

  return (
    <header className="site-header">
      <button type="button" onClick={() => document.getElementById('main-content')?.focus()} className="skip-link">Saltar al contingut</button>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-12">
        <a href="#/" aria-label="Nexe Consultoria ERP, tornar a l'inici" className="brand-link shrink-0">
          <img src={asset('nexe-logo.svg')} alt="Nexe Consultoria ERP" className="h-12 w-auto sm:h-14" />
        </a>
        <nav aria-label="Navegació principal" className="desktop-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} aria-current={page === item.page ? 'page' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label={menuOpen ? 'Tancar menú' : 'Obrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
          className="menu-toggle"
        >
          {menuOpen ? 'Tancar' : 'Menú'}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Navegació mòbil" className="mobile-nav">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} aria-current={page === item.page ? 'page' : undefined} onClick={() => { setMenuOpen(false); window.scrollTo(0, 0) }}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="home-hero">
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">Nexe / Ceràmica Riu Sec</p>
          <h1>El material ha d’arribar abans que comence la producció.</h1>
          <p className="hero-lead">Estudiem com passen les necessitats de material de producció a compres i magatzem en una fàbrica de taulells d’Onda.</p>
          <a href="#/proces" className="primary-link">Consultar el procés <span aria-hidden="true">↗</span></a>
        </div>
        <figure className="hero-visual">
          <img src={asset('ceramica-illustrativa.png')} alt="Línia de fabricació de taulells ceràmics amb peces apilades" width="1672" height="941" fetchPriority="high" />
          <figcaption>Planta de producció ceràmica · imatge il·lustrativa</figcaption>
        </figure>
      </div>
    </section>
  )
}

function HomeLinks() {
  return (
    <section className="home-brief">
      <div className="page-shell brief-grid">
        <div><p className="section-kicker">El punt crític</p><h2>Una dada d’estoc que arriba tard altera tota la planificació.</h2></div>
        <div className="brief-detail">
          <p>Producció comunica què necessita. Magatzem comprova què hi ha. Compres demana el que falta. Ara cada àrea treballa amb correus i fitxers separats, i les diferències poden descobrir-se quan la comanda ja és urgent.</p>
          <a href="#/empresa" className="text-link">Conéixer l’empresa <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="page-shell sequence-block">
        <div className="sequence-heading"><h2>On es perd la visió conjunta</h2><p>El procés travessa tres equips abans que el material estiga disponible.</p></div>
        <ol className="sequence-list">
          <li><span>01</span><div><h3>Producció</h3><p>Defineix les quantitats segons el pla de fabricació.</p></div></li>
          <li><span>02</span><div><h3>Compres</h3><p>Tramita les peticions i fa el seguiment del proveïdor.</p></div></li>
          <li><span>03</span><div><h3>Magatzem</h3><p>Rep, revisa i registra el material acceptat.</p></div></li>
        </ol>
      </div>
    </section>
  )
}

function Client() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading as="h1" eyebrow="Empresa client" title="Una fàbrica amb informació dispersa">
          Ceràmica Riu Sec fabrica taulells per a distribuïdors i empreses de construcció. Té una planta de producció i un magatzem propi a Onda, dins del clúster ceràmic de Castelló.
        </SectionHeading>
        <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-24">
          <div className="space-y-6 text-lg leading-8 text-muted">
            <p>La companyia va començar centrada en la fabricació de taulells. En créixer el nombre de clients i comandes, coordinar producció, magatzem i compres amb fitxers separats s’ha tornat més difícil.</p>
            <p>La seua estratègia és fabricar segons la demanda prevista, disposar dels materials a temps i evitar tant les aturades com l’excés d’estoc.</p>
          </div>
          <div className="border-l border-clay pl-7">
            <p className="text-sm font-semibold text-clay">Missió</p>
            <p className="mt-3 text-xl leading-7 font-semibold">Fabricar taulells de qualitat i entregar les comandes dins del termini acordat.</p>
            <p className="mt-8 text-sm font-semibold text-clay">Visió</p>
            <p className="mt-3 text-xl leading-7 font-semibold">Créixer sense perdre el control de la producció, les existències ni els lliuraments.</p>
          </div>
        </div>
        <div className="mt-16 border-t border-line pt-10">
          <h2 className="text-2xl font-bold tracking-tight">Estructura de l’empresa</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted">Els departaments més implicats en el procés són producció, magatzem, compres i qualitat.</p>
          <div className="department-list" aria-label="Departaments de Ceràmica Riu Sec">
            {departments.map((department) => (
              <div key={department.name} className="department-row">
                <strong>{department.people}</strong>
                <div><h3>{department.name}</h3><p>{department.task}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CurrentSystems() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Punt de partida" title="Tres registres, cap visió compartida">
          Ceràmica Riu Sec utilitza un programa de comptabilitat, però encara no té un ERP que connecte els departaments implicats en l’aprovisionament.
        </SectionHeading>
        <div className="mt-12 grid gap-0 border-y border-line md:grid-cols-3">
          {[
            { title: 'Producció', body: 'Comunica les necessitats per correu electrònic o verbalment.' },
            { title: 'Compres', body: 'Gestiona peticions i comandes amb correus i fulls de càlcul.' },
            { title: 'Magatzem', body: 'Registra les entrades de material en un altre fitxer.' },
          ].map((item) => (
            <div key={item.title} className="border-b border-line py-8 last:border-b-0 md:border-r md:border-b-0 md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-xl leading-8 font-semibold">Una necessitat comunicada tard o una entrada pendent de registrar pot fer que compres treballe amb una xifra d’estoc incorrecta.</p>
      </div>
    </section>
  )
}

function ProcessStep({ step, index, open, onToggle }) {
  const contentId = `pas-${index + 1}`
  return (
    <article className="border-b border-line">
      <h3>
        <button type="button" aria-expanded={open} aria-controls={contentId} onClick={onToggle} className="grid w-full grid-cols-[3rem_1fr_2rem] items-start gap-4 py-6 text-left transition-colors hover:text-clay sm:grid-cols-[4rem_1fr_2rem] sm:gap-6">
          <span className="pt-1 text-sm font-bold text-clay">{String(index + 1).padStart(2, '0')}</span>
          <span>
            <span className="block text-xl font-bold sm:text-2xl">{step.title}</span>
            <span className="mt-2 block text-sm leading-6 font-normal text-muted sm:text-base">{step.summary}</span>
          </span>
          <span aria-hidden="true" className="text-2xl font-light">{open ? '−' : '+'}</span>
        </button>
      </h3>
      {open && (
        <div id={contentId} className="grid gap-7 pb-8 pl-16 sm:pl-22 lg:grid-cols-3">
          <div><p className="text-sm font-semibold text-clay">Participen i utilitzen</p><p className="mt-2 text-sm leading-6 text-muted"><strong className="text-ink">{step.owner}.</strong> {step.tools}.</p></div>
          <div><p className="text-sm font-semibold text-clay">Entrada i resultat</p><p className="mt-2 text-sm leading-6 text-muted">{step.input}.<br /><strong className="font-medium text-ink">Resultat:</strong> {step.output}.</p></div>
          <div><p className="text-sm font-semibold text-clay">Deficiència actual</p><p className="mt-2 text-sm leading-6 text-muted">{step.problem}</p></div>
        </div>
      )}
    </article>
  )
}

function Process() {
  const [openStep, setOpenStep] = useState(0)
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading as="h1" eyebrow="Aprovisionament de matèries primeres" title="De la necessitat de material a l’estoc disponible">
          L’objectiu és que producció tinga argila, esmalts i materials d’embalatge en la quantitat necessària abans de començar cada ordre de fabricació.
        </SectionHeading>
        <div className="mt-11 grid gap-0 border-y border-line sm:grid-cols-2">
          <div className="py-6 sm:border-r sm:border-line sm:pr-9"><p className="text-sm font-semibold text-clay">Inici</p><p className="mt-2 text-lg font-semibold leading-7">Producció identifica i comunica els materials que necessita.</p></div>
          <div className="border-t border-line py-6 sm:border-t-0 sm:pl-9"><p className="text-sm font-semibold text-clay">Final</p><p className="mt-2 text-lg font-semibold leading-7">El material acceptat queda registrat i disponible al magatzem.</p></div>
        </div>
        <p className="mt-5 text-sm leading-6 text-muted">El consum durant la fabricació i el pagament de la factura queden fora de l’abast inicial.</p>
        <div className="mt-14 lg:grid lg:grid-cols-[.36fr_.64fr] lg:gap-16">
          <div className="mb-8 lg:mb-0"><h2 className="text-2xl font-bold">Activitats actuals</h2><p className="mt-3 text-base leading-7 text-muted">Obriu cada pas per veure els responsables, la informació i el problema detectat.</p></div>
          <div className="border-t border-line">
            {steps.map((step, index) => <ProcessStep key={step.title} step={step} index={index} open={openStep === index} onToggle={() => setOpenStep(openStep === index ? null : index)} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="section-kicker text-[#c9a090]">Necessitat de millora</p>
        <h2 className="mt-4 max-w-4xl text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl">Què preocupa la direcció</h2>
        <div className="mt-12 grid gap-8 border-t border-white/25 pt-9 md:grid-cols-3">
          <div><h3 className="text-xl font-bold">Estoc poc fiable</h3><p className="mt-3 leading-7 text-white/70">Els fitxers separats dificulten saber quina quantitat de material hi ha disponible.</p></div>
          <div><h3 className="text-xl font-bold">Compres urgents</h3><p className="mt-3 leading-7 text-white/70">Les peticions tardanes poden forçar comandes no planificades i elevar costos.</p></div>
          <div><h3 className="text-xl font-bold">Retards de fabricació</h3><p className="mt-3 leading-7 text-white/70">Si el material no arriba a temps, es poden incomplir els terminis de lliurament.</p></div>
        </div>
        <div className="mt-12 border-t border-white/25 pt-8 text-xl leading-8 font-semibold">La proposta estudiarà com compartir dades d’estoc, necessitats de producció i estat de les compres mitjançant un ERP.</div>
      </div>
    </section>
  )
}

function Consultancy() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading as="h1" eyebrow="La nostra consultora" title="Nexe Consultoria ERP">
          Analitzem els processos de Ceràmica Riu Sec i els requisits que hauria de complir una solució ERP.
        </SectionHeading>
        <div className="mt-12 grid gap-10 border-y border-line py-9 lg:grid-cols-2 lg:gap-20">
          <div><h2 className="text-xl font-bold">Què oferim</h2><p className="mt-3 text-base leading-7 text-muted">Anàlisi de la situació actual, definició de necessitats, comparació de solucions ERP, proposta de millora dels processos i planificació de la implantació.</p></div>
          <div><h2 className="text-xl font-bold">Àrees ERP relacionades</h2><p className="mt-3 text-base leading-7 text-muted">Compres i gestió d’inventari. Microsoft Dynamics 365 Business Central s’utilitza com a referència funcional; la selecció de l’ERP es treballarà en una fase posterior.</p></div>
        </div>
        <div className="mt-14">
          <h2 className="text-2xl font-bold">Qui som</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">Coneix les persones que formen Nexe. Els perfils professionals i els CV s’afegiran quan l’equip els confirme.</p>
          <ul className="team-list">
            {team.map((person) => (
              <li key={person.name}>
                <h3>{person.name}</h3>
                <p><strong>Estudis:</strong> {person.studies || 'Pendent de completar'}</p>
                <p><strong>Especialitat:</strong> {person.specialty || 'Pendent de completar'}</p>
                {person.cvUrl && <a href={person.cvUrl} target="_blank" rel="noreferrer" className="text-link">Veure el CV <span aria-hidden="true">↗</span></a>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Sources() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading as="h1" eyebrow="Documentació" title="Fonts consultades">
          Referències sobre el sector ceràmic, la planificació de l’aprovisionament i les normes de prevenció aplicables.
        </SectionHeading>
        <ul className="sources-list">
          <li><span>ASCER</span><a href="https://portal.ascer.es/el-sector/" target="_blank" rel="noreferrer">El sector ceràmic <span aria-hidden="true">↗</span></a></li>
          <li><span>Microsoft Learn</span><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-planning" target="_blank" rel="noreferrer">Planificació de l’aprovisionament <span aria-hidden="true">↗</span></a></li>
          <li><span>BOE</span><a href="https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292" target="_blank" rel="noreferrer">Llei 31/1995 · Prevenció de riscos laborals <span aria-hidden="true">↗</span></a></li>
          <li><span>BOE</span><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2001-8436" target="_blank" rel="noreferrer">Reial decret 374/2001 · Agents químics en el treball <span aria-hidden="true">↗</span></a></li>
        </ul>
        <p className="mt-8 max-w-3xl text-sm leading-6 text-muted">Les normes de seguretat s’apliquen a la recepció i manipulació del material quan corresponga.</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div><img src={asset('nexe-logo.svg')} alt="Nexe Consultoria ERP" className="h-14 w-auto" /><p className="mt-4 max-w-sm text-sm leading-6 text-muted">Consultoria de processos i selecció d’ERP.</p></div>
      </div>
    </footer>
  )
}

export default function App() {
  const [page, setPage] = useState(pageFromHash)

  useEffect(() => {
    const handleHashChange = () => setPage(pageFromHash())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    document.title = `${routeTitles[page]} · Nexe Consultoria ERP`
    window.scrollTo(0, 0)
  }, [page])

  return (
    <>
      <Header page={page} />
      <main id="main-content" tabIndex="-1">
        {page === 'inici' && <><Hero /><HomeLinks /></>}
        {page === 'empresa' && <><Client /><CurrentSystems /></>}
        {page === 'proces' && <><Process /><Problem /></>}
        {page === 'consultora' && <Consultancy />}
        {page === 'fonts' && <Sources />}
      </main>
      <Footer />
    </>
  )
}
