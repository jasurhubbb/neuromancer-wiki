function DiagramCard({ label, title, detail, accent = false }: {
  label: string;
  title: string;
  detail: string;
  accent?: boolean;
}) {
  return (
    <div className={`micro-diagram__card${accent ? " micro-diagram__card--accent" : ""}`}>
      <span>{label}</span>
      <strong>{title}</strong>
      <small>{detail}</small>
    </div>
  );
}

export function MicroLoreDiagram({ slug }: { slug: string }) {
  if (slug === "flip-flop-switch") {
    return (
      <figure className="micro-diagram" aria-labelledby="flip-flop-diagram-title">
        <div className="micro-diagram__heading">
          <p className="eyebrow">Functional map · not a circuit schematic</p>
          <p className="micro-diagram__title" id="flip-flop-diagram-title">What changes when Case flips the switch?</p>
        </div>
        <div className="micro-diagram__signal">
          <div className="micro-diagram__sources">
            <DiagramCard label="Input A" title="Matrix session" detail="Case remains jacked into cyberspace" />
            <DiagramCard label="Input B" title="Molly’s sensorium" detail="A separate broadcast rig sends simstim" />
          </div>
          <span className="micro-diagram__arrow" aria-hidden="true">↓</span>
          <DiagramCard label="Receiver-side selection" title="Finn’s black module" detail="One feed becomes Case’s foreground experience" accent />
          <span className="micro-diagram__arrow" aria-hidden="true">↓</span>
          <DiagramCard label="Host interface" title="Ono-Sendai → Case" detail="Sensation arrives; control of Molly does not" />
        </div>
        <figcaption>
          The novel establishes the two experiences and the ability to alternate between them. It does not reveal the module’s circuitry, and it does not depict a simultaneous split screen.
        </figcaption>
      </figure>
    );
  }

  if (slug === "memory-lane") {
    return (
      <figure className="micro-diagram" aria-labelledby="memory-lane-diagram-title">
        <div className="micro-diagram__heading">
          <p className="eyebrow">Chapter 4 route evidence</p>
          <p className="micro-diagram__title" id="memory-lane-diagram-title">A destination in the Sprawl, not a virtual memory space.</p>
        </div>
        <div className="micro-diagram__route">
          <DiagramCard label="01" title="Sprawl street" detail="Molly moves while Case rides simstim" />
          <span className="micro-diagram__arrow" aria-hidden="true">→</span>
          <DiagramCard label="02" title="Memory Lane outskirts" detail="The novel’s named location marker" accent />
          <span className="micro-diagram__arrow" aria-hidden="true">→</span>
          <DiagramCard label="03" title="Software-rental complex" detail="Booths and customers with carbon sockets" />
          <span className="micro-diagram__arrow" aria-hidden="true">→</span>
          <DiagramCard label="04" title="Larry’s booth" detail="Seventh booth on the south wall" />
        </div>
        <figcaption>
          This sequence records only the route details supplied by the scene. It is not a complete street map, and the earlier market smells and crowds should not all be assigned to Memory Lane itself.
        </figcaption>
      </figure>
    );
  }

  if (slug === "precis") {
    return (
      <figure className="micro-diagram" aria-labelledby="precis-diagram-title">
        <div className="micro-diagram__heading">
          <p className="eyebrow">Chapter 4 information flow</p>
          <p className="micro-diagram__title" id="precis-diagram-title">A concise briefing, assembled across media.</p>
        </div>
        <div className="micro-diagram__route">
          <DiagramCard label="01 · Request" title="Case names a subject" detail="Panther Moderns, with a five-minute limit" />
          <span className="micro-diagram__arrow" aria-hidden="true">→</span>
          <DiagramCard label="02 · Sources" title="Hosaka retrieves" detail="Libraries, journals, and news services" />
          <span className="micro-diagram__arrow" aria-hidden="true">→</span>
          <DiagramCard label="03 · Output" title="Multimedia précis" detail="Still image, motion, labels, and interview" accent />
          <span className="micro-diagram__arrow" aria-hidden="true">→</span>
          <DiagramCard label="04 · Judgment" title="Case filters it" detail="He skips material and forms his own reading" />
        </div>
        <figcaption>
          The scene establishes sources, media, and user controls. It does not identify a named app, a generative model, or the Hosaka’s summarization algorithm.
        </figcaption>
      </figure>
    );
  }

  return null;
}
