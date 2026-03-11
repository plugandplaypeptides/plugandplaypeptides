const IMGS = {
  heroAthlete:      'https://sspark.genspark.ai/cfimages?u1=ZdowuU602ahWL4IcSs5hMShhG1QbJ0YZFvtHBh32Mec03d0%2BmXNE2Wtxv7tw3HV1UhItixvyFrDuzKnV%2FhFmgIubCydpsDvWB9v0C%2BlqZvjxhJj8Xjngy%2FmV49P4970zhsOAzUDsp18Jx%2BuceLgVCk7ZCJh4NUEzvPLYIAfLJceksLMCCo9CLAJYRic%3D&u2=eVUZt9TGwAzZCnnY&width=2560',
  creatorWoman:     'https://sspark.genspark.ai/cfimages?u1=eEf1KxscPQXV%2F5SIVb3w%2Fw4Leotk6%2BFuY7muE%2FOBwq9u%2F6qrJDvVjLLl4o8AfV4tB4OnpkT25hJ0zFh6nYOuYKfwJvoucjpKCZbzi5b5LUEOGg%3D%3D&u2=mbVXo%2BVqexsSj1jC&width=2560',
  creatorMan:       'https://sspark.genspark.ai/cfimages?u1=JSOQyYk%2FBbS8csUbiHaKTp7ZCjTUS7%2BStjkgBvW6gnWxyqHI9M%2Bd6AwcP6i2HcQnBvHP2snAPfAaeYtmkYbcaF66ubWJqNjEuoojEDsdnjM%2BUA%3D%3D&u2=tQGTQJ7ot9JtaMYS&width=2560',
  doctorFemale:     'https://sspark.genspark.ai/cfimages?u1=Hoin65eiqZ0oMAQoq5ABA7X9Bn%2B4t8e%2BDh%2FyipUGJFMXaZt92nNxqUBXBBVk6rz3Oykuqzeqei4KynA6BDmovBVaKptcG%2BZediiNfHeeVCHaGg%3D%3D&u2=s695TUWMqzau4tWq&width=2560',
  womanSmiling:     'https://sspark.genspark.ai/cfimages?u1=2jjgGW47VW50pEzJKshJj1lQ7pg8Re3i%2Fqs8tu6JDS6zWgK470LMao%2FAUH8SVQExMG0XIBGxOwYG14%2BuxQZgE1j%2BOKRi01z4u66ms8FF9o0fXA%3D%3D&u2=ABarFACbt16CiY8J&width=2560',
  coupleSport:      'https://sspark.genspark.ai/cfimages?u1=nDjtvHtqLJc9YeJ2rjT4gfB0Ufr1jgGgfRfbKjXcdd246hUJTW938KPZE%2F%2B49Ak0%2BqGP41I40AcFckX4Q7ZqdOHcsqUfKRlyZbgVfYqTb4BCwhnerbY%2FxBwCigw5kqgLxMpHERrFAraaINNrdakgXagFB4rDqUI%3D&u2=K3DVyzlSrZh6uQlR&width=2560',
  doctorTelehealth: 'https://sspark.genspark.ai/cfimages?u1=BQnS04fN7YRxdMstKz5TMSAI7yp58IQbp6Z29nFozDsFIZRvHukIF7XjbxrUJPv7muoQZ85kw65Vcux5rFX%2FgYJQA5N2s8sIKf%2F8wAo%2Fh1Hq5w%3D%3D&u2=tC9P5GGTcIYRSP1J&width=2560',
}

export const cmoPage = () => (
  <>

    {/* ─────────────────────────────────────────────────────
        SECTION 1 · HERO
        Full viewport. Warm cream bg. Image fills the RIGHT half.
        Massive serif headline anchored left.
        This is how Hims opens a page.
    ───────────────────────────────────────────────────── */}
    <section style="background:#F5F0E8; min-height:100svh; display:grid; grid-template-columns:1fr 1fr; overflow:hidden; position:relative;">

      {/* Left — the words */}
      <div style="display:flex; flex-direction:column; justify-content:center; padding: clamp(3rem,8vw,8rem) clamp(2rem,5vw,5rem) clamp(3rem,8vw,8rem) clamp(2rem,6vw,6rem); position:relative; z-index:2;">

        <p class="hims-eyebrow" style="margin-bottom:2rem;">cmo marketing suite</p>

        <h1 class="hims-h1">
          creating a legit<br />
          peptide company<br />
          is the easy part.<br />
          <em>until now.</em>
        </h1>

        <p style="font-family:'DM Sans',sans-serif; font-size:clamp(1rem,1.4vw,1.2rem); color:#4A4A4A; line-height:1.7; max-width:420px; margin:2.5rem 0 3rem; font-weight:400;">
          The same growth infrastructure Hims built with $100M — retention, acquisition, conversion, intelligence — running under your brand from day one.
        </p>

        <div style="display:flex; flex-wrap:wrap; gap:1rem;">
          <a href="/apply?type=business" class="hims-btn-dark">apply as a business</a>
          <a href="/apply?type=influencer" class="hims-btn-outline-dark">apply as a creator</a>
        </div>

        <p style="margin-top:2rem; font-family:'DM Sans',sans-serif; font-size:0.8rem; color:#9A9A9A; letter-spacing:0.02em;">
          5-minute application &nbsp;·&nbsp; confidential &nbsp;·&nbsp; one partner per niche
        </p>
      </div>

      {/* Right — full-bleed image, no border radius, no padding */}
      <div style="position:relative; overflow:hidden;">
        <img
          src={IMGS.heroAthlete}
          alt=""
          style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:60% center;"
        />
        {/* Subtle warm overlay to blend with cream bg on left edge */}
        <div style="position:absolute; inset:0; background:linear-gradient(to right, #F5F0E8 0%, transparent 18%);"></div>
      </div>

      {/* Mobile: stack vertically */}
      <style dangerouslySetInnerHTML={{__html:`
        @media (max-width:768px) {
          .hims-hero-section { grid-template-columns: 1fr !important; }
          .hims-hero-img { height: 55vw; position:relative !important; }
        }
      `}} />
    </section>


    {/* ─────────────────────────────────────────────────────
        SECTION 2 · THE PROBLEM
        Dark navy. White text. Full-width.
        Hims does big text statements on dark sections.
        No card grid — just massive copy and a single split image.
    ───────────────────────────────────────────────────── */}
    <section style="background:#0F0F1A; overflow:hidden;">
      <div style="max-width:1200px; margin:0 auto; padding:clamp(5rem,10vw,9rem) clamp(1.5rem,5vw,4rem);">

        <p class="hims-eyebrow" style="color:rgba(255,255,255,0.4); margin-bottom:3rem;">the problem</p>

        {/* The big statement */}
        <h2 class="hims-h2" style="color:#FFFFFF; max-width:800px; margin-bottom:5rem;">
          they don't just have<br />
          more money.<br />
          <em style="color:#A8C5A0;">they have a better<br />machine.</em>
        </h2>

        {/* Three confrontational truths — no cards, just clean rows */}
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:4rem; border-top:1px solid rgba(255,255,255,0.1); padding-top:4rem;">
          {[
            {
              n: '01',
              head: "they know you're leaving before you do.",
              body: "Predictive models built on millions of patient events fire re-engagement sequences weeks before a patient considers canceling. That window fires automatically. Yours doesn't.",
            },
            {
              n: '02',
              head: "their brand lives in patients' heads rent-free.",
              body: "Every patient who orders from Hims enters a post-purchase experience so well-designed that the brand becomes part of their identity. You ship a box. They build a relationship.",
            },
            {
              n: '03',
              head: "their revenue compounds. yours resets every month.",
              body: "When every retained patient fuels acquisition, every protocol completion unlocks an upsell, and every referral compounds the base — revenue accelerates. That's what you're up against.",
            },
          ].map((item) => (
            <div>
              <p style="font-family:'DM Serif Display',Georgia,serif; font-size:clamp(2.5rem,4vw,4rem); color:rgba(255,255,255,0.12); line-height:1; margin-bottom:1.5rem; letter-spacing:-0.04em;">{item.n}</p>
              <h3 style="font-family:'DM Sans',sans-serif; font-size:1rem; font-weight:700; color:#FFFFFF; margin-bottom:1rem; line-height:1.4;">{item.head}</h3>
              <p style="font-family:'DM Sans',sans-serif; font-size:0.9rem; color:rgba(255,255,255,0.5); line-height:1.8;">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Mobile stack */}
        <style dangerouslySetInnerHTML={{__html:`
          @media (max-width:768px) {
            .hims-problem-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          }
        `}} />
      </div>
    </section>


    {/* ─────────────────────────────────────────────────────
        SECTION 3 · THE REVEAL
        Back to cream. This is the pivot moment.
        Centered editorial — huge serif, then the four pillars
        presented as large clean rows, not cards.
    ───────────────────────────────────────────────────── */}
    <section style="background:#F5F0E8; padding:clamp(5rem,10vw,10rem) 0; overflow:hidden;">
      <div style="max-width:1200px; margin:0 auto; padding:0 clamp(1.5rem,5vw,4rem);">

        {/* Centered pivot headline */}
        <div style="text-align:center; margin-bottom:clamp(4rem,8vw,7rem);">
          <p class="hims-eyebrow" style="margin-bottom:2rem; display:inline-block;">the cmo marketing suite</p>
          <h2 class="hims-h2" style="margin:0 auto; max-width:860px;">
            what took hims $100m<br />
            and five years to build —<br />
            <em>yours on day one.</em>
          </h2>
        </div>

        {/* Four pillars — large, clean, image left or right alternating */}
        {[
          {
            tag:   'retention',
            head:  'patients who never leave.',
            body:  'The moment someone orders, a relationship begins. Check-ins, protocol updates, reorder signals — all timed precisely. Your patients feel cared for because they are. 76% reorder within 60 days.',
            stat:  '76%',
            statLabel: 'reorder within 60 days',
            img:   IMGS.womanSmiling,
            flip:  false,
          },
          {
            tag:   'revenue',
            head:  'money that arrives while you sleep.',
            body:  'Protocol progressions. Smart reorders. Tiered plans. Every patient journey is designed to extend naturally — turning a one-time buyer into a years-long relationship. 2.3× average LTV in year one.',
            stat:  '2.3×',
            statLabel: 'average LTV in year one',
            img:   IMGS.coupleSport,
            flip:  true,
          },
          {
            tag:   'acquisition',
            head:  'new patients who cost less to find.',
            body:  'Every retained patient becomes a referral engine. Every outcome story becomes social proof. Acquisition compounds the longer you run — without spending more on ads.',
            stat:  '3×',
            statLabel: 'better checkout conversion',
            img:   IMGS.doctorTelehealth,
            flip:  false,
          },
          {
            tag:   'intelligence',
            head:  "you know what's working before your competitors notice.",
            body:  "Cohort data, LTV signals, churn patterns — surfaced and acted on automatically. You don't need a data team. The intelligence is built in.",
            stat:  '2–4',
            statLabel: 'weeks to launch',
            img:   IMGS.doctorFemale,
            flip:  true,
          },
        ].map((pillar) => (
          <div style={`display:grid; grid-template-columns:1fr 1fr; gap:0; margin-bottom:2px; direction:${pillar.flip ? 'rtl' : 'ltr'};`}>
            {/* Image half — full bleed, no padding, no border radius */}
            <div style="position:relative; overflow:hidden; min-height:520px; direction:ltr;">
              <img src={pillar.img} alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" />
            </div>
            {/* Text half */}
            <div style={`background:${pillar.flip ? '#EDEAE2' : '#F5F0E8'}; display:flex; flex-direction:column; justify-content:center; padding:clamp(3rem,5vw,5rem) clamp(2rem,4vw,5rem); direction:ltr;`}>
              <p class="hims-eyebrow" style="margin-bottom:1.5rem;">{pillar.tag}</p>
              <h3 style="font-family:'DM Serif Display',Georgia,serif; font-size:clamp(1.8rem,3vw,2.6rem); color:#1A1A1A; line-height:1.15; letter-spacing:-0.03em; margin-bottom:1.5rem;">{pillar.head}</h3>
              <p style="font-family:'DM Sans',sans-serif; font-size:1rem; color:#5A5A5A; line-height:1.8; margin-bottom:2.5rem; max-width:400px;">{pillar.body}</p>
              {/* Stat — Hims style: big number, small label */}
              <div style="border-top:1px solid rgba(0,0,0,0.1); padding-top:1.5rem;">
                <p style="font-family:'DM Serif Display',Georgia,serif; font-size:clamp(2.5rem,4vw,3.5rem); color:#1A1A1A; line-height:1; letter-spacing:-0.04em; margin-bottom:0.4rem;">{pillar.stat}</p>
                <p style="font-family:'DM Sans',sans-serif; font-size:0.8rem; color:#9A9A9A; letter-spacing:0.06em; text-transform:uppercase; font-weight:600;">{pillar.statLabel}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>


    {/* ─────────────────────────────────────────────────────
        SECTION 4 · WHAT IT FEELS LIKE
        Dark navy again. Full-bleed image left.
        Editorial quote overlaid. Activity feed right.
        Hims style: emotional, present-tense.
    ───────────────────────────────────────────────────── */}
    <section style="background:#0F0F1A; overflow:hidden;">
      <div style="display:grid; grid-template-columns:1fr 1fr; min-height:700px;">

        {/* Left: full-bleed image with editorial text overlay */}
        <div style="position:relative; overflow:hidden; min-height:600px;">
          <img src={IMGS.creatorWoman} alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center top;" />
          <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(15,15,26,0.9) 0%, rgba(15,15,26,0.3) 60%, transparent 100%);"></div>
          <div style="position:absolute; bottom:3rem; left:3rem; right:3rem;">
            <p class="hims-eyebrow" style="color:rgba(255,255,255,0.5); margin-bottom:1.5rem;">what it feels like</p>
            <p style="font-family:'DM Serif Display',Georgia,serif; font-size:clamp(1.8rem,3vw,2.8rem); color:#FFFFFF; line-height:1.2; letter-spacing:-0.03em;">
              you wake up.<br />
              your brand grew<br />
              <em style="color:#A8C5A0;">while you slept.</em>
            </p>
          </div>
        </div>

        {/* Right: activity feed on dark */}
        <div style="padding:clamp(3rem,5vw,5rem) clamp(2rem,4vw,4rem); display:flex; flex-direction:column; justify-content:center;">
          <p style="font-family:'DM Sans',sans-serif; font-size:0.95rem; color:rgba(255,255,255,0.5); line-height:1.7; margin-bottom:3rem; max-width:400px;">
            Every morning your brand has been working overnight. Not metaphorically. Literally.
          </p>

          <div style="display:flex; flex-direction:column; gap:1px;">
            {[
              { tag:'retention',    text:"A patient who ordered 18 days ago received a reorder prompt at exactly the right moment. They're checking out now.", time:'just now' },
              { tag:'ltv',          text:"A patient completed their first protocol. A physician-guided progression to the next tier started automatically.", time:'4 min ago' },
              { tag:'win-back',     text:"A patient who went quiet at day 12 received a personalized check-in. They replied, and reordered.", time:'19 min ago' },
              { tag:'referral',     text:"A patient referred two friends. Both completed intake. All three patients now carry your brand.", time:'41 min ago' },
              { tag:'intelligence', text:"Cohort data flagged that protocol completers have 22% higher 90-day LTV in your brand.", time:'1 hr ago' },
            ].map((item) => (
              <div style="display:flex; gap:1rem; align-items:flex-start; padding:1.25rem 0; border-bottom:1px solid rgba(255,255,255,0.07);">
                <div style="flex-shrink:0; margin-top:3px;">
                  <div style="width:7px; height:7px; border-radius:50%; background:#A8C5A0;"></div>
                </div>
                <div style="flex:1;">
                  <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.5rem;">
                    <span style="font-family:'DM Sans',sans-serif; font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:#A8C5A0;">{item.tag}</span>
                    <span style="font-family:'DM Sans',sans-serif; font-size:0.75rem; color:rgba(255,255,255,0.3);">{item.time}</span>
                  </div>
                  <p style="font-family:'DM Sans',sans-serif; font-size:0.875rem; color:rgba(255,255,255,0.7); line-height:1.65;">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p style="margin-top:2rem; font-family:'DM Sans',sans-serif; font-size:0.8rem; color:rgba(255,255,255,0.3); font-style:italic; text-align:center;">all of this. while you were doing something else.</p>
        </div>
      </div>
    </section>


    {/* ─────────────────────────────────────────────────────
        SECTION 5 · PROOF
        Back to cream. Partner voices.
        Hims style: clean testimonials, no heavy card treatment.
        One large quote dominating, supporting quotes clean.
    ───────────────────────────────────────────────────── */}
    <section style="background:#F5F0E8; padding:clamp(5rem,10vw,9rem) 0; overflow:hidden;">
      <div style="max-width:1200px; margin:0 auto; padding:0 clamp(1.5rem,5vw,4rem);">

        <p class="hims-eyebrow" style="margin-bottom:3rem;">partner results</p>

        <h2 class="hims-h2" style="max-width:700px; margin-bottom:clamp(4rem,8vw,6rem);">
          what changes when you<br />
          <em>stop competing alone.</em>
        </h2>

        {/* Featured testimonial — large, editorial */}
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0; margin-bottom:2px; border:1px solid rgba(0,0,0,0.08); overflow:hidden;">
          <div style="position:relative; overflow:hidden; min-height:480px;">
            <img src={IMGS.creatorMan} alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" />
          </div>
          <div style="background:#FFFFFF; padding:clamp(2.5rem,4vw,4rem);">
            <div style="display:flex; gap:2px; margin-bottom:2rem;">
              {[1,2,3,4,5].map(i => <span style="color:#D4A847; font-size:1rem;">★</span>)}
            </div>
            <blockquote style="font-family:'DM Serif Display',Georgia,serif; font-size:clamp(1.4rem,2.2vw,2rem); color:#1A1A1A; line-height:1.35; letter-spacing:-0.02em; margin-bottom:2.5rem; font-style:italic;">
              "Month one I made $22,400. But what actually surprised me was month three — I hadn't run a single new ad. The revenue came from patients who already ordered."
            </blockquote>
            <div style="display:flex; align-items:center; gap:1rem; padding-top:1.5rem; border-top:1px solid #E8E4DC;">
              <div style="width:44px; height:44px; border-radius:50%; background:#1A1A1A; color:#FFFFFF; font-family:'DM Sans',sans-serif; font-weight:700; font-size:0.9rem; display:flex; align-items:center; justify-content:center; flex-shrink:0;">A</div>
              <div>
                <p style="font-family:'DM Sans',sans-serif; font-size:0.9rem; font-weight:700; color:#1A1A1A;">Alex M.</p>
                <p style="font-family:'DM Sans',sans-serif; font-size:0.8rem; color:#9A9A9A;">Fitness Creator · 800K followers</p>
              </div>
              <div style="margin-left:auto; background:#F0F7F0; border:1px solid #C8E0C8; padding:6px 14px; border-radius:999px;">
                <p style="font-family:'DM Sans',sans-serif; font-size:0.75rem; font-weight:700; color:#2D6A2D; white-space:nowrap;">$22,400 month one</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two supporting quotes */}
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2px;">
          {[
            {
              initial: 'S',
              quote: "I own a med spa. I know what a real patient experience looks like. What my brand delivers through Plug & Play is better than most clinics I've seen — and I'm not managing any of it.",
              name: 'Dr. Sarah K.',
              role: 'Med Spa Owner · Miami, FL',
              tag: '$45K/mo recurring',
            },
            {
              initial: 'J',
              quote: "I've promoted brands for years. This is the first time I've promoted something where the brand itself keeps the relationship alive after I send someone. My audience trusts me more, not less.",
              name: 'Jordan T.',
              role: 'Biohacking Creator · 1.2M followers',
              tag: 'Audience trust preserved',
            },
          ].map((t) => (
            <div style="background:#FFFFFF; padding:clamp(2rem,3vw,3rem); border:1px solid rgba(0,0,0,0.08);">
              <div style="display:flex; gap:2px; margin-bottom:1.5rem;">
                {[1,2,3,4,5].map(i => <span style="color:#D4A847; font-size:0.85rem;">★</span>)}
              </div>
              <p style="font-family:'DM Sans',sans-serif; font-size:1rem; color:#3A3A3A; line-height:1.75; font-style:italic; margin-bottom:2rem;">"{t.quote}"</p>
              <div style="display:flex; align-items:center; gap:0.75rem; padding-top:1.25rem; border-top:1px solid #E8E4DC;">
                <div style="width:36px; height:36px; border-radius:50%; background:#1A1A1A; color:#FFFFFF; font-family:'DM Sans',sans-serif; font-weight:700; font-size:0.8rem; display:flex; align-items:center; justify-content:center; flex-shrink:0;">{t.initial}</div>
                <div>
                  <p style="font-family:'DM Sans',sans-serif; font-size:0.85rem; font-weight:700; color:#1A1A1A;">{t.name}</p>
                  <p style="font-family:'DM Sans',sans-serif; font-size:0.75rem; color:#9A9A9A;">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


    {/* ─────────────────────────────────────────────────────
        SECTION 6 · CTA
        Dark navy. Full width.
        Big closing headline + clean list of what they get.
        One CTA. Hims keeps it simple.
    ───────────────────────────────────────────────────── */}
    <section style="background:#0F0F1A; padding:clamp(6rem,12vw,10rem) 0; overflow:hidden;">
      <div style="max-width:1200px; margin:0 auto; padding:0 clamp(1.5rem,5vw,4rem);">

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:clamp(3rem,6vw,8rem); align-items:start;">

          {/* Left: the close */}
          <div>
            <p class="hims-eyebrow" style="color:rgba(255,255,255,0.4); margin-bottom:2rem;">one partner per niche</p>
            <h2 class="hims-h2" style="color:#FFFFFF; margin-bottom:2rem;">
              the hard part<br />
              just got<br />
              <em style="color:#A8C5A0;">a lot easier.</em>
            </h2>
            <p style="font-family:'DM Sans',sans-serif; font-size:1.05rem; color:rgba(255,255,255,0.6); line-height:1.8; margin-bottom:2.5rem; max-width:440px;">
              The CMO Suite is included with every Plug & Play partnership. Compliance infrastructure, physician network, fulfillment, and the full growth machine — all under your brand.
            </p>
            <p style="font-family:'DM Sans',sans-serif; font-size:0.9rem; color:rgba(255,255,255,0.4); line-height:1.7; margin-bottom:3rem; max-width:400px;">
              We accept one partner per niche and geography. The brands applying today are the ones who will own this space.
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:1rem;">
              <a href="/apply?type=business" class="hims-btn-light">apply as a business</a>
              <a href="/apply?type=influencer" class="hims-btn-outline-light">apply as a creator</a>
            </div>
            <p style="margin-top:1.5rem; font-family:'DM Sans',sans-serif; font-size:0.78rem; color:rgba(255,255,255,0.3);">
              5-minute application · 100% confidential · no commitment required
            </p>
          </div>

          {/* Right: clean outcome list — Hims style */}
          <div>
            <p style="font-family:'DM Sans',sans-serif; font-size:0.75rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.3); margin-bottom:1.5rem;">what you wake up with</p>
            <div style="display:flex; flex-direction:column;">
              {[
                {
                  head: 'a physician-supervised brand that passes any audit.',
                  sub:  'FDA-registered pharmacies · Licensed MDs in all 50 states · HIPAA-compliant platform',
                },
                {
                  head: 'patients who feel cared for by a real brand.',
                  sub:  'Onboarding · check-ins · reorders · protocol progressions — all automatic',
                },
                {
                  head: 'revenue that grows without proportional effort.',
                  sub:  'Retention engine · referral loops · protocol upsells — compounding month over month',
                },
                {
                  head: 'intelligence that gets smarter every month.',
                  sub:  'LTV cohorts · churn signals · acquisition data — surfaced automatically',
                },
                {
                  head: 'live in 2–4 weeks. no staff. no overhead.',
                  sub:  'We build everything. You promote your brand. We handle the rest.',
                },
              ].map((item, i) => (
                <div style={`padding:1.5rem 0; border-bottom:1px solid rgba(255,255,255,0.08); ${i === 0 ? 'border-top:1px solid rgba(255,255,255,0.08);' : ''}`}>
                  <p style="font-family:'DM Sans',sans-serif; font-size:0.95rem; font-weight:600; color:#FFFFFF; margin-bottom:0.4rem; line-height:1.4;">{item.head}</p>
                  <p style="font-family:'DM Sans',sans-serif; font-size:0.8rem; color:rgba(255,255,255,0.4); line-height:1.6;">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* ─────────────────────────────────────────────────────
        GLOBAL STYLES for this page
        These are the Hims design tokens applied to our brand.
    ───────────────────────────────────────────────────── */}
    <style dangerouslySetInnerHTML={{__html:`

      /* ── Typography tokens ── */
      .hims-h1 {
        font-family: 'DM Serif Display', Georgia, 'Times New Roman', serif;
        font-size: clamp(3rem, 6.5vw, 6.5rem);
        line-height: 1.0;
        letter-spacing: -0.035em;
        color: #1A1A1A;
        font-weight: 400;
      }
      .hims-h1 em { font-style: italic; color: #2D6A2D; }

      .hims-h2 {
        font-family: 'DM Serif Display', Georgia, 'Times New Roman', serif;
        font-size: clamp(2.4rem, 5vw, 5rem);
        line-height: 1.05;
        letter-spacing: -0.03em;
        color: #1A1A1A;
        font-weight: 400;
        margin: 0;
      }
      .hims-h2 em { font-style: italic; color: #2D6A2D; }

      .hims-eyebrow {
        font-family: 'DM Sans', sans-serif;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #7A7A7A;
        display: block;
      }

      /* ── Buttons ── */
      .hims-btn-dark {
        display: inline-flex;
        align-items: center;
        background: #1A1A1A;
        color: #FFFFFF;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        padding: 15px 36px;
        border-radius: 999px;
        text-decoration: none;
        transition: background 0.2s, transform 0.15s;
        white-space: nowrap;
      }
      .hims-btn-dark:hover { background: #333; transform: translateY(-1px); }

      .hims-btn-outline-dark {
        display: inline-flex;
        align-items: center;
        background: transparent;
        color: #1A1A1A;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        padding: 14px 36px;
        border-radius: 999px;
        border: 1.5px solid #1A1A1A;
        text-decoration: none;
        transition: background 0.2s, transform 0.15s;
        white-space: nowrap;
      }
      .hims-btn-outline-dark:hover { background: rgba(0,0,0,0.06); transform: translateY(-1px); }

      .hims-btn-light {
        display: inline-flex;
        align-items: center;
        background: #FFFFFF;
        color: #1A1A1A;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        padding: 15px 36px;
        border-radius: 999px;
        text-decoration: none;
        transition: background 0.2s, transform 0.15s;
        white-space: nowrap;
      }
      .hims-btn-light:hover { background: #F0EDE8; transform: translateY(-1px); }

      .hims-btn-outline-light {
        display: inline-flex;
        align-items: center;
        background: transparent;
        color: rgba(255,255,255,0.8);
        font-family: 'DM Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        padding: 14px 36px;
        border-radius: 999px;
        border: 1.5px solid rgba(255,255,255,0.35);
        text-decoration: none;
        transition: border-color 0.2s, color 0.2s, transform 0.15s;
        white-space: nowrap;
      }
      .hims-btn-outline-light:hover { border-color: rgba(255,255,255,0.7); color: #fff; transform: translateY(-1px); }

      /* ── Responsive fixes ── */
      @media (max-width: 900px) {
        /* Hero: stack */
        section:first-of-type {
          grid-template-columns: 1fr !important;
        }
        section:first-of-type > div:last-child {
          min-height: 55vw;
          position: relative !important;
        }
        /* Pillar rows: stack */
        .hims-pillar-row {
          grid-template-columns: 1fr !important;
          direction: ltr !important;
        }
        /* Proof grid: stack */
        .hims-proof-main { grid-template-columns: 1fr !important; }
        .hims-proof-quotes { grid-template-columns: 1fr !important; }
        /* CTA grid: stack */
        .hims-cta-grid { grid-template-columns: 1fr !important; }
      }

      @media (max-width: 768px) {
        .hims-h1 { font-size: clamp(2.6rem, 10vw, 4rem); }
        .hims-h2 { font-size: clamp(2rem, 8vw, 3rem); }
      }

    `}} />

  </>
)
