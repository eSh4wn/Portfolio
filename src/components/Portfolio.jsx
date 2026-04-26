"use client";

export default function Portfolio() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <h1>Ishaan Suri</h1>
        <h2>Aerospace Engineer | CFD & Aerodynamics</h2>
        <p>
          Aerospace Engineer specializing in CFD, Aerodynamics, and UAV systems.
          Currently working as an R&D Engineer focused on high-speed aerodynamic
          design and intake flow optimization.
        </p>
      </section>

      {/* ABOUT */}
      <section>
        <h2>About</h2>
        <p>
          Aerospace Engineer with strong expertise in Computational Fluid Dynamics
          and aerodynamic design. Experienced in solving complex flow problems such
          as S-duct flows and transonic regimes.
        </p>
        <p>
          Currently working on UAV systems and aerodynamic optimization, with focus
          on performance-driven engineering solutions.
        </p>
        <p>
          Upskilling in ANSA, OpenFOAM, and MATLAB to align with industry-grade CFD workflows.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2>Experience</h2>

        <h3>R&D Engineer — Apollyon Dynamics</h3>
        <p>Feb 2026 – Present</p>
        <ul>
          <li>Design Lead for interceptor UAV (~360 kmph, &lt;2.5 kg MTOW)</li>
          <li>Improved S-duct intake efficiency by ~30% using CFD</li>
          <li>Performed aerodynamic validation and design calculations</li>
        </ul>

        <h3>Associate Engineer Trainee — Aksi Aerospace</h3>
        <p>Jan 2025 – Mar 2025</p>
        <ul>
          <li>Designed VTOL UAV (3 kg payload, 3-hour endurance)</li>
          <li>Worked on composites and production processes</li>
        </ul>

        <h3>CAD Engineer Intern — Triad Aerospace</h3>
        <p>Sep 2023 – Jan 2024</p>
        <ul>
          <li>Designed UAV components and drone systems</li>
          <li>Improved structural strength for higher payload</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section>
        <h2>Projects</h2>

        <h3>High-Speed UAV Flow Enhancement</h3>
        <p>
          Worked on boundary layer reattachment concepts for UAVs operating in high-speed turbulent regimes.
        </p>

        <h3>Rescue Operation Drone</h3>
        <p>
          Designed a spinning drone concept to improve hovering efficiency and reduce power usage.
        </p>

        <h3>High Altitude VTOL UAV</h3>
        <p>
          Designed 4+1 VTOL UAV system with Pixhawk Cube Orange and reduced structural weight by 20–30%.
        </p>

        <h3>Convertible Advanced Wing Design</h3>
        <p>
          Developed variable geometry wing with tilt-rotor integration for improved mission flexibility.
        </p>

        <h3>SAE DDC 2024</h3>
        <p>
          Designed variable dihedral wing and optimized aerodynamic + structural performance.
        </p>

        <h3>Aerogel Combustion Chamber</h3>
        <p>
          Improved combustion chamber efficiency and reduced heat loss by ~15%.
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <h2>Skills</h2>
        <ul>
          <li>ANSYS Fluent — Advanced</li>
          <li>SolidWorks — Strong</li>
          <li>OpenFOAM — Learning</li>
          <li>ANSYS CFX — Learning</li>
          <li>ICEM CFD — Learning</li>
          <li>ANSA — Learning</li>
          <li>Python — Good</li>
          <li>MATLAB — Basic</li>
        </ul>
      </section>

      {/* ACHIEVEMENTS */}
      <section>
        <h2>Achievements</h2>
        <ul>
          <li>GATE 2026 — AIR 161</li>
          <li>SAE DDC 2024 — 2nd Innovation, 3rd Technical Presentation</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section>
        <h2>Contact</h2>
        <p>Email: suriishaan2003@gmail.com</p>
        <p>Phone: +91 8790175522</p>
      </section>
    </div>
  );
}