import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Mail, Star } from "lucide-react";
import familyPhoto from "@/assets/family-photo.jpg.asset.json";
import nia from "@/assets/family-nia.jpg";
import jay from "@/assets/family-jay.jpg";
import zuri from "@/assets/family-zuri.jpg";
import member05 from "@/assets/member-05.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Family — 5 People. 1 Crew. 1 Story." },
      { name: "description", content: "Meet the five personalities behind one loud, loving family crew." },
      { property: "og:title", content: "The Family — Meet the Crew" },
      { property: "og:description", content: "Five people. One crew. One story." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const members = [
  {
    number: "01",
    name: "Marcus",
    nickname: "HOÀI VĂN",
    role: "The Captain",
    personality: "Cool under pressure",
    favorite: "Sunday vinyl sessions",
    description: "Can fix anything except the Wi-Fi. Claims every old-school beat was better.",
    image: familyPhoto.url,
    rotation: "md:-rotate-2",
  },
  {
    number: "02",
    name: "Nia",
    nickname: "NGUYỄN THU",
    role: "The Mastermind",
    personality: "Sharp, warm, unstoppable",
    favorite: "Late-night kitchen dancing",
    description: "Knows where everything is, including the thing you swear you never moved.",
    image: nia,
    rotation: "md:rotate-1",
  },
  {
    number: "03",
    name: "Jay",
    nickname: "HOÀI ANH",
    role: "The DJ",
    personality: "Low-key chaos",
    favorite: "Making impossible playlists",
    description: "Has headphones on 24/7 and still somehow hears every snack bag open.",
    image: jay,
    rotation: "md:rotate-2",
  },
  {
    number: "04",
    name: "Zuri",
    nickname: "HOÀI AN",
    role: "The Creative",
    personality: "Bold with zero filter",
    favorite: "Sketchbooks & sneakers",
    description: "Out-dresses everyone before breakfast and documents the evidence.",
    image: zuri,
    rotation: "md:-rotate-1",
  },
  {
    number: "05",
    name: "Milo",
    nickname: "HOÀI BẢO",
    role: "The Wild Card",
    personality: "Maximum volume",
    favorite: "Cereal at any hour",
    description: "Smallest in the crew. Biggest opinions. Never met a couch he couldn't jump from.",
    image: member05.url,
    rotation: "md:rotate-1",
  },
];

const timeline = [
  ["2008", "The crew begins", "Two dreamers decide to build something louder than the world outside."],
  ["2009", "First beat drops", "Jay arrives and the house officially loses its volume control."],
  ["2012", "Creative direction", "Zuri joins with big ideas, bold fits, and a camera-ready stare."],
  ["2017", "Full lineup", "Milo completes the five and immediately rewrites every house rule."],
  ["Today", "Still rolling", "Same crew. New chapters. More inside jokes than we can count."],
];

function Index() {
  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-foreground/15 bg-background/80 px-5 py-4 backdrop-blur-md md:px-10">
        <a href="#top" className="font-display text-xl uppercase">TF<span className="text-primary">//</span>25</a>
        <nav aria-label="Main navigation" className="flex gap-4 font-condensed text-sm font-bold uppercase md:gap-8">
          <a className="nav-link" href="#crew">Crew</a>
          <a className="nav-link hidden sm:block" href="#story">Story</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="relative min-h-[940px] border-b border-foreground/15 px-5 pb-20 pt-28 md:min-h-[900px] md:px-10 md:pt-36">
        <div className="absolute left-[3%] top-32 z-20 -rotate-12 bg-primary px-4 py-2 font-marker text-2xl text-primary-foreground shadow-sticker md:left-[7%] md:top-44">TRAN SICNE 1996</div>
        <p className="absolute right-5 top-28 z-20 rotate-3 border-2 border-foreground px-3 py-1 font-condensed text-sm font-black uppercase md:right-12">GIA TỘC HỌ TRẦN X 131LABEL.</p>

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <div className="relative text-center">
            <p className="mb-3 font-condensed text-base font-bold uppercase tracking-[0.25em] text-primary md:text-xl">5 people · 1 crew · 1 story</p>
            <h1 className="glitch-title font-display text-[clamp(5rem,17vw,15rem)] leading-[0.72] uppercase" data-text="The Family">The<br />Family</h1>
          </div>

          <div className="hero-collage mx-auto mt-10 grid h-[470px] max-w-6xl grid-cols-10 items-end md:-mt-8 md:h-[500px]">
            {members.map((member, index) => (
              <figure key={member.name} className={`hero-portrait hero-portrait-${index + 1}`}>
                <img src={member.image} alt={`${member.name}, ${member.role}`} width={768} height={1024} className="h-full w-full object-cover" />
                <figcaption className="absolute bottom-2 left-2 bg-background px-2 py-1 font-condensed text-xs font-black uppercase">{member.nickname}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <a href="#crew" aria-label="Scroll to meet the crew" className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-condensed text-xs font-bold uppercase text-muted-foreground transition-colors hover:text-primary">
          Scroll to meet us <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </section>

      <div className="marquee border-b border-foreground/20 bg-primary py-3 text-primary-foreground">
        <div className="marquee-track font-display text-2xl uppercase md:text-4xl">
          FAMILY FIRST — LEGACY — ALL LOVE — BLOOD — FAMILY FIRST — BOND — ALL LOVE — CHAOS — FAMILY GENES   
        </div>
      </div>

      <section id="crew" className="section-space mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-14 flex items-end justify-between gap-8 md:mb-24">
          <div>
            <span className="section-kicker">MEMBER</span>
            <h2 className="section-title">MEET MY<br /><span className="text-primary">FAMILY.</span></h2>
          </div>
          <p className="hidden max-w-xs font-condensed text-lg uppercase leading-tight text-muted-foreground md:block">NĂM NGƯỜI.<br />NĂM TẦN SỐ.</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          {members.map((member, index) => (
            <article key={member.name} tabIndex={0} className={`crew-card group ${member.rotation} ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
              <div className="relative aspect-[4/5] overflow-hidden bg-card">
                <img src={member.image} alt={`${member.name}, ${member.role}`} loading="lazy" width={768} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105" />
                <span className="absolute left-3 top-3 font-display text-5xl text-foreground/90">{member.number}</span>
                <div className="card-reveal absolute inset-x-0 bottom-0 bg-primary p-5 text-primary-foreground">
                  <dl className="grid gap-3 font-condensed text-sm uppercase">
                    <div><dt className="font-bold opacity-60">Personality</dt><dd className="text-lg font-bold">{member.personality}</dd></div>
                    <div><dt className="font-bold opacity-60">Favorite thing</dt><dd className="text-lg font-bold">{member.favorite}</dd></div>
                  </dl>
                </div>
              </div>
              <div className="relative border-t-4 border-primary bg-paper p-5 text-ink">
                <span className="absolute -right-2 -top-5 rotate-6 bg-primary px-3 py-1 font-marker text-lg text-primary-foreground">{member.nickname}</span>
                <p className="font-condensed text-sm font-bold uppercase text-primary">{member.role}</p>
                <h3 className="font-display text-5xl uppercase md:text-6xl">{member.name}</h3>
                <p className="mt-3 max-w-md font-condensed text-lg leading-snug">{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="relative border-y border-foreground/15 bg-paper text-ink">
        <div className="section-space mx-auto max-w-[1300px] px-5 md:px-10">
          <span className="section-kicker text-primary">The origin story</span>
          <h2 className="section-title mb-16 md:mb-24">Family<br />timeline.</h2>
          <div className="timeline relative">
            {timeline.map(([year, title, copy], index) => (
              <article key={year} className={`timeline-entry ${index % 2 ? "md:ml-auto" : ""}`}>
                <div className="flex items-start gap-4 md:gap-8">
                  <span className="font-display text-4xl text-primary md:text-6xl">{year}</span>
                  <div>
                    <h3 className="font-display text-2xl uppercase md:text-4xl">{title}</h3>
                    <p className="mt-2 max-w-sm font-condensed text-lg leading-snug text-ink/70 md:text-xl">{copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-14 flex items-end justify-between">
          <div><span className="section-kicker">By the numbers</span><h2 className="section-title">Fun facts.</h2></div>
          <Star className="hidden h-20 w-20 rotate-12 fill-primary text-primary md:block" />
        </div>
        <div className="facts-grid">
          <article className="fact-block bg-primary text-primary-foreground"><strong>1,429</strong><span>group chat messages this week</span></article>
          <article className="fact-block bg-paper text-ink"><strong>07</strong><span>snacks hidden from Milo</span></article>
          <article className="fact-block border-2 border-foreground"><strong>93%</strong><span>chance someone is playing music</span></article>
          <article className="fact-block bg-foreground text-background"><strong>∞</strong><span>inside jokes nobody else understands</span></article>
        </div>
      </section>

      <section className="quote-section relative flex min-h-[620px] items-center justify-center overflow-hidden border-y border-primary px-5 py-28 text-center">
        <span className="absolute left-4 top-4 font-marker text-4xl text-primary md:left-12 md:top-10">NO FAKE LOVE</span>
        <span className="absolute bottom-8 right-4 rotate-6 border-2 border-primary px-4 py-2 font-condensed text-xl font-black uppercase text-primary md:right-12">Crew since day one</span>
        <blockquote className="relative z-10 max-w-6xl">
          <p className="font-display text-[clamp(3.2rem,9vw,8.5rem)] leading-[0.85] uppercase">“We don't have it all together. <span className="text-primary">Together, we have it all.</span>”</p>
          <footer className="mt-8 font-condensed text-lg font-bold uppercase tracking-[0.2em] text-muted-foreground">— The family code</footer>
        </blockquote>
      </section>

      <footer id="contact" className="relative px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1500px]">
          <p className="section-kicker">End of side A</p>
          <div className="mt-6 flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
            <h2 className="font-display text-[clamp(4rem,12vw,11rem)] leading-[0.78] uppercase">Say<br /><span className="text-primary">what's up.</span></h2>
            <a href="mailto:hello@example.com" className="contact-link group flex items-center gap-3 border-b-2 border-primary pb-2 font-condensed text-2xl font-bold uppercase md:text-4xl">
              hello@example.com <Mail className="h-7 w-7 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/20 pt-6 font-condensed text-sm font-bold uppercase text-muted-foreground">
            <span>© 2026 The Family</span><span>Made with noise, love & snacks</span><a href="#top" className="flex items-center gap-1 hover:text-primary">Back to top <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
