import { useEffect, useRef, useState } from "react";

const careerLevels = [
  {
    level: "01",
    icon: "support",
    stage: "ENTRY-LEVEL",
    title: "IT Support Technician / Help Desk Technician",
    summary: "Provides technical assistance to users and resolves common hardware, software, and computer-related issues.",
    responsibilities: [
      "Troubleshoot hardware, software, and operating system problems.",
      "Install and configure computers and applications.",
      "Assist users with technical concerns.",
      "Document support requests and solutions.",
    ],
    skills: [
      "Computer hardware and software",
      "Windows fundamentals",
      "Troubleshooting",
      "Communication",
      "Basic networking",
    ],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Cyber_warriors_keep_the_mission_going_151029-F-ES117-010.jpg/960px-Cyber_warriors_keep_the_mission_going_151029-F-ES117-010.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        alt: "Client systems technician checking computers during a technology refresh",
        caption: "Endpoint checks and computer troubleshooting",
        source: "https://commons.wikimedia.org/wiki/File:Cyber_warriors_keep_the_mission_going_151029-F-ES117-010.jpg",
        credit: "U.S. Air Force · Public domain",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Replacing_hardware_160210-F-KR223-021.jpg/960px-Replacing_hardware_160210-F-KR223-021.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        alt: "Technician replacing a component inside a desktop computer",
        caption: "Replacing desktop computer hardware",
        source: "https://commons.wikimedia.org/wiki/File:Replacing_hardware_160210-F-KR223-021.jpg",
        credit: "U.S. Air Force · Public domain",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Computer_repair_technician.svg/960px-Computer_repair_technician.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        alt: "Illustration of a hardware technician working at a desktop computer",
        caption: "Hardware diagnostics and repair",
        source: "https://commons.wikimedia.org/wiki/File:Computer_repair_technician.svg",
        credit: "Juhele · CC0",
      },
    ],
    video: {
      id: "33fjR9wP0Qo",
      title: "A+ Computer Repair Course Chapter 1 part 1",
      channel: "Greg French",
      caption: "Computer repair fundamentals and diagnostic workflow",
    },
    nextSkills: "Build confidence with Windows support, basic networking, and a clear troubleshooting process.",
  },
  {
    level: "02",
    icon: "server",
    stage: "INTERMEDIATE-LEVEL",
    title: "Junior System Administrator / System Administrator",
    summary: "Maintains servers, user accounts, network resources, and system availability to support daily IT operations.",
    responsibilities: [
      "Install, configure, and maintain servers.",
      "Manage user accounts and access permissions.",
      "Monitor system performance and troubleshoot problems.",
      "Perform backups, updates, and security checks.",
    ],
    skills: [
      "Windows and Linux administration",
      "Networking",
      "Active Directory",
      "Server management",
      "Backup and recovery",
      "Basic cybersecurity",
    ],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Technician_with_laptop_working_on_server_rack_at_NERSC.jpg/960px-Technician_with_laptop_working_on_server_rack_at_NERSC.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        alt: "Technician using a laptop while working at a server rack",
        caption: "Server maintenance in a data center",
        source: "https://commons.wikimedia.org/wiki/File:Technician_with_laptop_working_on_server_rack_at_NERSC.jpg",
        credit: "Derrick Coetzee · CC0",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Network_server_and_technician.jpg/960px-Network_server_and_technician.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        alt: "IT technician checking a network server",
        caption: "Checking network server equipment",
        source: "https://commons.wikimedia.org/wiki/File:Network_server_and_technician.jpg",
        credit: "Bill Branson · Public domain",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Rear_of_rack_at_NERSC_data_center_-_closeup.jpg/960px-Rear_of_rack_at_NERSC_data_center_-_closeup.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        alt: "Close view of network and power cables at the rear of a data center rack",
        caption: "Server rack cabling and connections",
        source: "https://commons.wikimedia.org/wiki/File:Rear_of_rack_at_NERSC_data_center_-_closeup.jpg",
        credit: "Derrick Coetzee · CC0",
      },
    ],
    video: {
      id: "QxsqVuwWrZs",
      title: "Learn Windows Server 2022 in Just 30 Mins",
      channel: "Andy Malone MVP",
      caption: "Windows Server basics, server tools, DHCP, and DNS",
    },
    nextSkills: "Grow into server management, directory services, backups, and reliable maintenance routines.",
  },
  {
    level: "03",
    icon: "cloud",
    stage: "ADVANCED-LEVEL",
    title: "Senior System Administrator / Systems Engineer / IT Infrastructure Manager",
    summary: "Designs, manages, and optimizes complex IT infrastructure while ensuring system security, reliability, and scalability.",
    responsibilities: [
      "Design and improve IT infrastructure.",
      "Manage cloud services and virtualized environments.",
      "Develop automation and disaster recovery strategies.",
      "Lead technical projects and mentor junior IT staff.",
    ],
    skills: [
      "Advanced server administration",
      "Cloud computing",
      "Virtualization",
      "Scripting",
      "Cybersecurity",
      "Infrastructure architecture",
      "Leadership",
    ],
    images: [
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/U.S._Ambassador_and_Power_Information_Technology_Company_CEO_Commemorate_Opening_of_Network_Operations_Center_in_Lahore_%2815239200760%29.jpg/960px-U.S._Ambassador_and_Power_Information_Technology_Company_CEO_Commemorate_Opening_of_Network_Operations_Center_in_Lahore_%2815239200760%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        alt: "Network operations center with monitoring screens and infrastructure equipment",
        caption: "Enterprise network operations environment",
        source: "https://commons.wikimedia.org/wiki/File:U.S._Ambassador_and_Power_Information_Technology_Company_CEO_Commemorate_Opening_of_Network_Operations_Center_in_Lahore_(15239200760).jpg",
        credit: "USAID Pakistan · Public domain",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Summit_Computer_Room_Installation_%28rubin-2018-05-02-110524%29.jpg/960px-Summit_Computer_Room_Installation_%28rubin-2018-05-02-110524%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        alt: "Network equipment installation inside an observatory computer room",
        caption: "Planning and installing infrastructure",
        source: "https://commons.wikimedia.org/wiki/File:Summit_Computer_Room_Installation_(rubin-2018-05-02-110524).jpg",
        credit: "Rubin Observatory / NSF / AURA · CC BY 4.0",
      },
      {
        src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Technician_with_laptop_working_on_server_rack_at_NERSC.jpg/960px-Technician_with_laptop_working_on_server_rack_at_NERSC.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        alt: "Engineer using a laptop to manage a large server rack",
        caption: "Managing and monitoring infrastructure",
        source: "https://commons.wikimedia.org/wiki/File:Technician_with_laptop_working_on_server_rack_at_NERSC.jpg",
        credit: "Derrick Coetzee · CC0",
      },
    ],
    video: {
      id: "OCiN37sjXuw",
      title: "Setup an Azure Virtual Machine in JUST 5 minutes - Tutorial",
      channel: "Anders Jensen",
      caption: "Deploying and connecting to a cloud virtual machine",
    },
    nextSkills: "Strengthen cloud architecture, automation, security planning, and technical leadership.",
  },
];

const skills = [
  {
    number: "01",
    icon: "operatingSystem",
    title: "Operating systems",
    description:
      "Manage users, permissions, services, updates, and logs in Windows and Linux environments.",
    visualLabel: "SYSTEM STATUS",
    visualMetric: "Windows + Linux",
    visualDetail: "accounts · services · logs",
  },
  {
    number: "02",
    icon: "network",
    title: "Networking",
    description:
      "Understand IP addressing, DNS, DHCP, routing, and firewalls to find where connectivity breaks.",
    visualLabel: "NETWORK MAP",
    visualMetric: "IP + DNS",
    visualDetail: "address · route · resolve",
  },
  {
    number: "03",
    icon: "troubleshooting",
    title: "Troubleshooting",
    description:
      "Use a calm, repeatable process to identify root causes, minimize downtime, and document fixes.",
    visualLabel: "DIAGNOSTIC",
    visualMetric: "Find the cause",
    visualDetail: "test · isolate · document",
  },
  {
    number: "04",
    icon: "security",
    title: "Security fundamentals",
    description:
      "Apply least privilege, patch systems, protect credentials, and recognize common threats.",
    visualLabel: "SECURITY CHECK",
    visualMetric: "Least privilege",
    visualDetail: "access · updates · credentials",
  },
  {
    number: "05",
    icon: "automation",
    title: "Scripting & automation",
    description:
      "Use PowerShell or Bash to reduce repetitive work and make routine changes consistent.",
    visualLabel: "AUTOMATION",
    visualMetric: "PowerShell",
    visualDetail: "scripts · tasks · repeat",
  },
  {
    number: "06",
    icon: "communication",
    title: "Communication",
    description:
      "Explain technical issues clearly, write useful handover notes, and work well with end users.",
    visualLabel: "SUPPORT HANDOFF",
    visualMetric: "User support",
    visualDetail: "listen · explain · follow up",
  },
];

const roles = [
  {
    title: "Help Desk Technician",
    icon: "support",
    number: "01",
    focus: "People & endpoints",
    description:
      "The first point of contact for IT support. Resolves common user, device, and application problems, then escalates issues that need deeper access.",
    difference: "Works closest to end users and handles a high volume of individual requests.",
    mediaImage: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/ITS_Help_Desk.jpg/960px-ITS_Help_Desk.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      alt: "IT support staff member using a computer while helping a student at a help desk",
      caption: "Helping a user with a computer support request",
      source: "https://commons.wikimedia.org/wiki/File:ITS_Help_Desk.jpg",
      credit: "Teaching and Learning with Technology · CC BY 2.0",
    },
    mediaVideo: careerLevels[0].video,
  },
  {
    title: "System Administrator",
    icon: "server",
    number: "02",
    focus: "Servers & services",
    description:
      "Maintains the shared systems that teams depend on: servers, accounts, storage, backups, and the services connecting them.",
    difference: "Owns ongoing availability, maintenance, and access for organization-wide systems.",
    mediaImage: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Technician_with_laptop_working_on_server_rack_at_NERSC.jpg/960px-Technician_with_laptop_working_on_server_rack_at_NERSC.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      alt: "Technician using a laptop to manage equipment on a server rack",
      caption: "Maintaining servers in a data center",
      source: "https://commons.wikimedia.org/wiki/File:Technician_with_laptop_working_on_server_rack_at_NERSC.jpg",
      credit: "Derrick Coetzee · CC0",
    },
    mediaVideo: careerLevels[1].video,
  },
  {
    title: "Systems Engineer",
    icon: "cloud",
    number: "03",
    focus: "Architecture & change",
    description:
      "Plans and builds infrastructure solutions, evaluates new technologies, and leads deployments or large-scale improvements.",
    difference: "Spends more time designing and delivering infrastructure changes than handling daily tickets.",
    mediaImage: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Summit_Computer_Room_Installation_%28rubin-2018-05-02-110524%29.jpg/960px-Summit_Computer_Room_Installation_%28rubin-2018-05-02-110524%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      alt: "Technician installing network equipment in a computer room, illustrating infrastructure deployment",
      caption: "Deploying infrastructure in a computer room",
      source: "https://commons.wikimedia.org/wiki/File:Summit_Computer_Room_Installation_(rubin-2018-05-02-110524).jpg",
      credit: "Rubin Observatory / NSF / AURA · CC BY 4.0",
    },
    mediaVideo: careerLevels[2].video,
  },
];

const tools = [
  {
    type: "OPERATING SYSTEM",
    name: "Linux",
    logo: "linux.svg",
    icon: "terminal",
    description: "Practice shell commands, permissions, services, and server maintenance.",
    visualTitle: "ROOT@SERVER",
    visualValue: "systemctl status",
    visualNote: "services running",
  },
  {
    type: "SERVER PLATFORM",
    name: "Windows Server",
    logo: "windows-server.svg",
    icon: "operatingSystem",
    description: "Learn directory services, group policies, DNS, and server administration.",
    visualTitle: "SERVER MANAGER",
    visualValue: "Roles & services",
    visualNote: "identity · DNS · policy",
  },
  {
    type: "AUTOMATION",
    name: "PowerShell",
    logo: "powershell.svg",
    icon: "automation",
    description: "Automate Windows administration and build repeatable task scripts.",
    visualTitle: "ADMIN SCRIPT",
    visualValue: "Get-Service",
    visualNote: "repeatable workflows",
  },
  {
    type: "VIRTUALIZATION",
    name: "VirtualBox",
    logo: "virtualbox.svg",
    icon: "virtualization",
    description: "Create safe virtual machines for testing operating systems and networks.",
    visualTitle: "LOCAL LAB",
    visualValue: "3 virtual machines",
    visualNote: "test in isolation",
  },
  {
    type: "VERSION CONTROL",
    name: "Git",
    logo: "git.svg",
    icon: "git",
    description: "Track script changes and keep configuration work organized.",
    visualTitle: "CHANGE HISTORY",
    visualValue: "commit → review",
    visualNote: "track every change",
  },
  {
    type: "CLOUD",
    name: "Azure",
    logo: "azure.svg",
    icon: "cloud",
    description: "Explore cloud identities, virtual networks, and hosted infrastructure.",
    visualTitle: "CLOUD NETWORK",
    visualValue: "identity + compute",
    visualNote: "connect services",
  },
];

const iconArtwork = {
  support: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="12" width="4" height="7" rx="2" />
      <rect x="17" y="12" width="4" height="7" rx="2" />
      <path d="M17 19a5 5 0 0 1-5 3h-2" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01M11 8h6M11 17h6" />
    </>
  ),
  cloud: (
    <path d="M7 18h10a4 4 0 0 0 .7-7.94A6 6 0 0 0 6.2 8.5 4.8 4.8 0 0 0 7 18Z" />
  ),
  operatingSystem: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="m10.8 7.2-4.6 8.6m7-8.6 4.6 8.6M7.5 18h9" />
    </>
  ),
  troubleshooting: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 4 4M8 10h5M10.5 7.5v5" />
    </>
  ),
  security: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  automation: (
    <>
      <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2-11-4 14" />
    </>
  ),
  communication: (
    <>
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3m6 0h4" />
    </>
  ),
  virtualization: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  git: (
    <>
      <circle cx="6" cy="5" r="2" />
      <circle cx="18" cy="19" r="2" />
      <circle cx="18" cy="7" r="2" />
      <path d="M6 7v10a2 2 0 0 0 2 2h8m2-10v8M8 9h6a4 4 0 0 0 4-4" />
    </>
  ),
};

function InfoIcon({ name, className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {iconArtwork[name]}
    </svg>
  );
}

function CareerImage({ image }) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="career-image-card">
      <a
        className="career-image-link"
        href={image.source}
        target="_blank"
        rel="noreferrer"
        aria-label={`View image source: ${image.caption}`}
      >
        {hasError ? (
          <span className="career-image-fallback" role="img" aria-label={image.alt}>
            Image unavailable
          </span>
        ) : (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            onError={() => setHasError(true)}
          />
        )}
      </a>
      <figcaption>
        <span>{image.caption}</span>
        <a href={image.source} target="_blank" rel="noreferrer">
          {image.credit}
        </a>
      </figcaption>
    </figure>
  );
}

function CareerMedia({ career }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="career-media" aria-label={`${career.stage} career images and video`}>
      <h4>See the work in action</h4>
      <div className="career-image-gallery">
        {career.images.map((image) => (
          <CareerImage image={image} key={image.src} />
        ))}
      </div>
      <div className="career-video-card">
        <div className="career-video-frame">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${career.video.id}?autoplay=1&controls=1&rel=0`}
              title={`${career.video.title} by ${career.video.channel}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              className="career-video-play"
              type="button"
              aria-label={`Play ${career.video.title}`}
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={`https://i.ytimg.com/vi/${career.video.id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span aria-hidden="true">▶</span>
            </button>
          )}
        </div>
        <div className="career-video-caption">
          <div>
            <strong>{career.video.caption}</strong>
            <span>{career.video.title} · {career.video.channel}</span>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${career.video.id}`}
            target="_blank"
            rel="noreferrer"
          >
            Open on YouTube ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function getSkillsCarouselMetrics(viewport) {
  const cards = Array.from(viewport.querySelectorAll(".skill-item"));
  const firstVisibleCard = cards.find(
    (card) => card.offsetLeft + card.offsetWidth > viewport.scrollLeft + viewport.clientLeft + 1,
  );

  return {
    activeIndex: firstVisibleCard ? cards.indexOf(firstVisibleCard) : 0,
    canScrollBack: viewport.scrollLeft > 1,
    canScrollForward:
      viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - 1,
  };
}

function RoleMedia({ role, isActive }) {
  const [isManuallyPlaying, setIsManuallyPlaying] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const shouldPlay = isActive && (!prefersReducedMotion || isManuallyPlaying);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = (event) => setPrefersReducedMotion(event.matches);

    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <div className="role-media" aria-label={`${role.title} work examples`}>
      <figure className="role-media-image">
        <a href={role.mediaImage.source} target="_blank" rel="noreferrer">
          <img src={role.mediaImage.src} alt={role.mediaImage.alt} loading="lazy" />
        </a>
        <figcaption>
          <span>{role.mediaImage.caption}</span>
          <a href={role.mediaImage.source} target="_blank" rel="noreferrer">
            {role.mediaImage.credit}
          </a>
        </figcaption>
      </figure>
      <div className="role-media-video">
        <div className="role-video-frame">
          {shouldPlay ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${role.mediaVideo.id}?autoplay=1&mute=1&controls=1&playsinline=1&rel=0&start=0&end=45`}
              title={`${role.mediaVideo.title} — 45-second ${role.title} demonstration`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="role-video-poster">
              <img src={role.mediaImage.src} alt="" loading="lazy" />
              <button
                type="button"
                aria-label={`Play ${role.title} clip`}
                onClick={() => setIsManuallyPlaying(true)}
                disabled={!isActive}
              >
                <span aria-hidden="true">▶</span>
                <span>
                  {!isActive ? "Clip plays when visible" : prefersReducedMotion ? "Play clip" : "Clip plays when visible"}
                </span>
              </button>
            </div>
          )}
        </div>
        <div className="role-video-caption">
          <span>{role.mediaVideo.caption} · 45 sec · muted</span>
          <a
            href={`https://www.youtube.com/watch?v=${role.mediaVideo.id}`}
            target="_blank"
            rel="noreferrer"
          >
            Video source
          </a>
        </div>
      </div>
    </div>
  );
}

function SysPath() {
  const [selectedCareer, setSelectedCareer] = useState(0);
  const [previewCareer, setPreviewCareer] = useState(null);
  const [isCareerPinned, setIsCareerPinned] = useState(false);
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [canScrollSkillsBack, setCanScrollSkillsBack] = useState(false);
  const [canScrollSkillsForward, setCanScrollSkillsForward] = useState(true);
  const [activeRoleVideo, setActiveRoleVideo] = useState(null);
  const milestoneRefs = useRef([]);
  const pathwayRef = useRef(null);
  const rolesSectionRef = useRef(null);
  const roleRefs = useRef([]);
  const skillsViewportRef = useRef(null);
  const activeCareer = isCareerPinned ? selectedCareer : previewCareer ?? selectedCareer;
  const career = careerLevels[activeCareer];

  function returnToTop(event) {
    event.preventDefault();
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  useEffect(() => {
    if (window.location.hash === "#home") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionPreference.matches || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const root = document.documentElement;
    const revealSelector = [
      ".scroll-reveal",
      "header a",
      "header button",
      "main :is(h1, h2, h3, h4, h5, h6, p, figure, img, video, iframe, svg, button, a, article, li)",
      "main [class*='card']",
      "main [class*='badge']",
      "main [class*='milestone']",
      "main [class*='stat']",
      "main [class*='icon']",
      "main [class*='artwork']",
      "main [class*='timeline']",
      "main [class*='number']",
      "main [class*='eyebrow']",
      "main [class*='status']",
      "main [class*='label']",
      "main [class*='mark']",
    ].join(", ");
    const observedElements = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    function observeRevealTargets(container) {
      if (container.matches?.(revealSelector) && !observedElements.has(container)) {
        container.classList.add("scroll-reveal-item");
        observedElements.add(container);
        observer.observe(container);
      }

      container.querySelectorAll?.(revealSelector).forEach((element) => {
        if (observedElements.has(element)) {
          return;
        }

        element.classList.add("scroll-reveal-item");
        observedElements.add(element);
        observer.observe(element);
      });
    }

    observeRevealTargets(document);
    root.classList.add("scroll-reveal-ready");
    const contentObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            observeRevealTargets(node);
          }
        });
      });
    });
    contentObserver.observe(document.querySelector("main"), {
      childList: true,
      subtree: true,
    });

    return () => {
      contentObserver.disconnect();
      observer.disconnect();
      root.classList.remove("scroll-reveal-ready");
    };
  }, []);

  function updateSkillsCarousel() {
    const viewport = skillsViewportRef.current;

    if (!viewport) {
      return;
    }

    const metrics = getSkillsCarouselMetrics(viewport);
    setActiveSkillIndex(metrics.activeIndex);
    setCanScrollSkillsBack(metrics.canScrollBack);
    setCanScrollSkillsForward(metrics.canScrollForward);
  }

  function moveSkillsCarousel(direction) {
    const viewport = skillsViewportRef.current;

    if (!viewport) {
      return;
    }

    const nextIndex = Math.min(
      skills.length - 1,
      Math.max(0, activeSkillIndex + direction),
    );
    const card = viewport.querySelectorAll(".skill-item")[nextIndex];

    if (!card) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    viewport.scrollTo({
      left: card.offsetLeft - viewport.clientLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  useEffect(() => {
    let animationFrame = 0;

    function updateCareerFromScroll() {
      if (isCareerPinned || previewCareer !== null) {
        return;
      }

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const section = pathwayRef.current;

        if (!section) {
          return;
        }

        const bounds = section.getBoundingClientRect();

        if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) {
          return;
        }

        const viewportCenter = window.innerHeight / 2;
        const stageIndex = milestoneRefs.current.reduce(
          (closestIndex, milestone, index, milestones) => {
            if (!milestone) {
              return closestIndex;
            }

            const markerCenter =
              milestone.getBoundingClientRect().top +
              milestone.getBoundingClientRect().height / 2;
            const closestMilestone = milestones[closestIndex];

            if (!closestMilestone) {
              return index;
            }

            const closestCenter =
              closestMilestone.getBoundingClientRect().top +
              closestMilestone.getBoundingClientRect().height / 2;

            return Math.abs(markerCenter - viewportCenter) <
              Math.abs(closestCenter - viewportCenter)
              ? index
              : closestIndex;
          },
          0,
        );

        setSelectedCareer(stageIndex);
      });
    }

    window.addEventListener("scroll", updateCareerFromScroll, { passive: true });
    updateCareerFromScroll();

    return () => {
      window.removeEventListener("scroll", updateCareerFromScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [isCareerPinned, previewCareer]);

  useEffect(() => {
    const viewport = skillsViewportRef.current;

    if (!viewport) {
      return undefined;
    }

    const observer = new ResizeObserver(() => {
      const metrics = getSkillsCarouselMetrics(viewport);
      setActiveSkillIndex(metrics.activeIndex);
      setCanScrollSkillsBack(metrics.canScrollBack);
      setCanScrollSkillsForward(metrics.canScrollForward);
    });
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    function updateActiveRoleVideo() {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const section = rolesSectionRef.current;

        if (!section) {
          return;
        }

        const bounds = section.getBoundingClientRect();

        if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) {
          setActiveRoleVideo(null);
          return;
        }

        const viewportCenter = window.innerHeight / 2;
        const closestIndex = roleRefs.current.reduce(
          (closest, row, index, rows) => {
            if (!row) {
              return closest;
            }

            const rowBounds = row.getBoundingClientRect();
            const rowCenter = rowBounds.top + rowBounds.height / 2;
            const closestRow = rows[closest];

            if (!closestRow) {
              return index;
            }

            const closestBounds = closestRow.getBoundingClientRect();
            const closestCenter = closestBounds.top + closestBounds.height / 2;

            return Math.abs(rowCenter - viewportCenter) <
              Math.abs(closestCenter - viewportCenter)
              ? index
              : closest;
          },
          0,
        );

        setActiveRoleVideo(closestIndex);
      });
    }

    window.addEventListener("scroll", updateActiveRoleVideo, { passive: true });
    updateActiveRoleVideo();

    return () => {
      window.removeEventListener("scroll", updateActiveRoleVideo);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  function handleMilestoneKeyDown(event, index) {
    let nextIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % careerLevels.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + careerLevels.length) % careerLevels.length;
    } else {
      return;
    }

    event.preventDefault();
    milestoneRefs.current[nextIndex]?.focus();
  }

  return (
    <>
      <section className="hero landing-hero scroll-reveal reveal-hero" id="home">
        <div className="hero-content">
          <div className="hero-copy">
            <span className="hero-eyebrow">A GUIDE TO IT INFRASTRUCTURE CAREERS</span>
            <h1>System Administrator <span>Career Pathways</span></h1>
            <p className="hero-introduction">
              Discover career opportunities that keep technology running. Explore how
              IT support can grow into system administration, cloud infrastructure,
              and engineering—and learn about the skills and tools used at every stage.
            </p>
          </div>

          <div className="hero-infrastructure-card" aria-label="Illustration of connected IT infrastructure">
            <div className="infrastructure-card-header">
              <div>
                <span className="infrastructure-eyebrow">THE BIG PICTURE</span>
                <h2>One connected system.</h2>
              </div>
              <span className="infrastructure-status">
                <span />
                IT ECOSYSTEM
              </span>
            </div>

            <div className="infrastructure-diagram">
              <svg className="infrastructure-connectors" viewBox="0 0 600 190" preserveAspectRatio="none" aria-hidden="true">
                <path d="M 140 96 C 205 96 205 54 270 54" />
                <path d="M 140 96 C 205 96 205 138 270 138" />
                <path d="M 330 54 C 395 54 395 96 460 96" />
                <path d="M 330 138 C 395 138 395 96 460 96" />
              </svg>
              <div className="infrastructure-node infrastructure-node-users">
                <span><InfoIcon name="operatingSystem" /></span>
                <strong>People &amp; devices</strong>
                <small>Endpoints</small>
              </div>
              <div className="infrastructure-node infrastructure-node-network">
                <span><InfoIcon name="network" /></span>
                <strong>Network</strong>
                <small>Connectivity</small>
              </div>
              <div className="infrastructure-node infrastructure-node-systems">
                <span><InfoIcon name="server" /></span>
                <strong>Core systems</strong>
                <small>Servers &amp; services</small>
              </div>
              <div className="infrastructure-node infrastructure-node-cloud">
                <span><InfoIcon name="cloud" /></span>
                <strong>Cloud</strong>
                <small>Scale &amp; storage</small>
              </div>
            </div>

            <div className="infrastructure-card-footer">
              <span>THE ADMINISTRATOR’S TOOLKIT</span>
              <div>
                <span><InfoIcon name="security" /> Security</span>
                <span><InfoIcon name="troubleshooting" /> Monitoring</span>
                <span><InfoIcon name="automation" /> Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pathway-section section-wrap scroll-reveal reveal-pathway" id="career-pathway" ref={pathwayRef}>
        <SectionHeading eyebrow="THE CAREER PATHWAY" title="A career that builds on itself.">
          Every role adds a new layer of experience. Your exact route may vary, but
          these milestones show how support skills can grow into infrastructure leadership.
        </SectionHeading>

        <div className="career-pathway-layout">
          <div className="career-timeline-scroll">
            <div className="career-timeline" role="group" aria-label="Choose a career level">
              <svg className="timeline-track" viewBox="0 0 300 600" preserveAspectRatio="none" aria-hidden="true">
                <path
                  className="timeline-track-base"
                  d="M 72 65 C 156 140 156 225 72 300 C 0 375 0 460 72 535"
                  pathLength="1000"
                />
                <path
                  className="timeline-track-progress"
                  d="M 72 65 C 156 140 156 225 72 300 C 0 375 0 460 72 535"
                  pathLength="1000"
                  strokeDasharray="1000"
                  strokeDashoffset={1000 - [50, 500, 1000][activeCareer]}
                />
              </svg>
              {careerLevels.map((milestone, index) => (
                <button
                  className={`timeline-milestone timeline-milestone-${index + 1}${activeCareer === index ? " is-active" : ""}`}
                  key={milestone.level}
                  type="button"
                  ref={(element) => {
                    milestoneRefs.current[index] = element;
                  }}
                  aria-pressed={selectedCareer === index}
                  aria-controls="career-level-details"
                  aria-label={`${milestone.level}, ${milestone.stage}: ${milestone.title}`}
                  onMouseEnter={() => {
                    if (!isCareerPinned) {
                      setPreviewCareer(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isCareerPinned) {
                      setPreviewCareer(null);
                    }
                  }}
                  onFocus={() => {
                    if (!isCareerPinned) {
                      setPreviewCareer(index);
                    }
                  }}
                  onBlur={() => {
                    if (!isCareerPinned) {
                      setPreviewCareer(null);
                    }
                  }}
                  onClick={() => {
                    if (isCareerPinned && selectedCareer === index) {
                      setIsCareerPinned(false);
                    } else {
                      setSelectedCareer(index);
                      setIsCareerPinned(true);
                    }
                    setPreviewCareer(null);
                  }}
                  onKeyDown={(event) => handleMilestoneKeyDown(event, index)}
                >
                  <span className="timeline-node">
                    <InfoIcon name={milestone.icon} />
                    <span>{milestone.level}</span>
                  </span>
                  <span className="timeline-label">
                    <span>{milestone.stage}</span>
                    <strong>{milestone.title}</strong>
                  </span>
                </button>
              ))}
            </div>
            <p className="career-timeline-hint">
              Scroll to explore stages, or click one to pin its content. Click the pinned stage again to resume.
            </p>
          </div>

          <article
            className="career-detail-panel"
            id="career-level-details"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="career-detail-content" key={career.level}>
              <div className="career-panel-heading">
                <span className="career-panel-icon"><InfoIcon name={career.icon} /></span>
                <div>
                  <span className="career-level-badge">{career.level} / {career.stage}</span>
                  <h3>{career.title}</h3>
                  <p>{career.summary}</p>
                </div>
              </div>
              <CareerMedia career={career} key={career.level} />
              <div className="career-panel-body">
                <div className="career-responsibilities">
                  <h4>Main responsibilities</h4>
                  <ul>
                    {career.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div className="career-required-skills">
                  <h4>Required skills</h4>
                  <ul>
                    {career.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="career-next-skills">
                <InfoIcon name="automation" />
                <p><strong>Skills to develop next</strong>{career.nextSkills}</p>
              </div>
            </div>
          </article>
        </div>
        <div className="pathway-footnote">
          <span className="footnote-mark">↗</span>
          <p>
            <strong>There’s more than one route.</strong> Specialize along the way in
            cloud, security, networking, or automation as your interests develop.
          </p>
        </div>
      </section>

      <section className="skills-section section-wrap scroll-reveal reveal-skills" id="skills">
        <div className="skills-intro">
          <SectionHeading eyebrow="YOUR FOUNDATION" title="Skills worth building.">
            Strong administrators combine practical technical knowledge with
            patience, curiosity, and a habit of learning.
          </SectionHeading>
          <div className="skills-aside">
            <span className="aside-number">{String(skills.length).padStart(2, "0")}</span>
            <span>CORE SKILLS<br />TO PRACTICE</span>
          </div>
        </div>
        <div className="skills-carousel">
          <div className="skills-carousel-toolbar">
            <p id="skills-carousel-help">Move horizontally to explore the skill examples.</p>
            <div className="skills-carousel-controls" aria-label="Skills carousel controls">
              <span className="skills-carousel-count" aria-live="polite">
                {String(activeSkillIndex + 1).padStart(2, "0")} / {String(skills.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                aria-label="Show previous skill"
                disabled={!canScrollSkillsBack}
                onClick={() => moveSkillsCarousel(-1)}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                aria-label="Show next skill"
                disabled={!canScrollSkillsForward}
                onClick={() => moveSkillsCarousel(1)}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <div
            className="skills-carousel-viewport"
            ref={skillsViewportRef}
            role="region"
            aria-label="Core system administration skills"
            aria-describedby="skills-carousel-help"
            tabIndex={0}
            onScroll={updateSkillsCarousel}
          >
            <div className="skills-track">
              {skills.map((skill) => (
                <article className="skill-item" key={skill.number}>
                  <div className={`skill-artwork skill-artwork-${skill.icon}`} aria-hidden="true">
                    <div className="skill-artwork-window">
                      <div className="skill-artwork-topbar">
                        <span className="skill-artwork-dots"><i /><i /><i /></span>
                        <span>{skill.visualLabel}</span>
                      </div>
                      <div className="skill-artwork-content">
                        <span className="skill-artwork-icon"><InfoIcon name={skill.icon} /></span>
                        <div className="skill-artwork-readout">
                          <strong>{skill.visualMetric}</strong>
                          <span>{skill.visualDetail}</span>
                          <div className="skill-artwork-meter"><i /></div>
                        </div>
                      </div>
                      <div className="skill-artwork-footer">
                        <span /><span /><span />
                      </div>
                    </div>
                  </div>
                  <div className="skill-card-copy">
                    <span className="skill-number">{skill.number} / CORE SKILL</span>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="roles-section section-wrap scroll-reveal reveal-roles" id="job-roles" ref={rolesSectionRef}>
        <SectionHeading eyebrow="ROLES IN THE FIELD" title="Different jobs. One connected team.">
          These roles work together to keep people productive and technology dependable.
          The focus shifts from individual support to shared systems, then to future design.
        </SectionHeading>
        <div className="roles-list">
          {roles.map((role, index) => (
            <article
              className="role-row"
              key={role.title}
              ref={(element) => {
                roleRefs.current[index] = element;
              }}
            >
              <div className="role-copy">
                <span className="role-illustration" aria-hidden="true">
                  <InfoIcon name={role.icon} />
                  <span>{role.number}</span>
                </span>
                <div className="role-main">
                  <span className="role-focus">{role.focus}</span>
                  <h3>{role.title}</h3>
                </div>
                <p className="role-description">{role.description}</p>
                <div className="role-difference">
                  <span>THE KEY DIFFERENCE</span>
                  <p>{role.difference}</p>
                </div>
              </div>
              <RoleMedia
                key={`${role.title}-${activeRoleVideo === index}`}
                role={role}
                isActive={activeRoleVideo === index}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="tools-section section-wrap scroll-reveal reveal-tools" id="tools">
        <SectionHeading eyebrow="LEARN BY DOING" title="Build your infrastructure toolkit.">
          Start with a small lab, a virtual machine, or a free learning tier.
          Hands-on practice makes abstract infrastructure concepts real.
        </SectionHeading>
        <div className="tools-constellation">
          <div className="tools-constellation-heading" aria-hidden="true">
            <span>YOUR PRACTICE STACK</span>
            <span>06 TOOLS / ONE LAB</span>
          </div>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <article className={`tool-card tool-card-${tool.icon}`} key={tool.name}>
                <div className="tool-card-top">
                  <span className="tool-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="tool-type">{tool.type}</span>
                </div>
                <div className="tool-artwork">
                  <div className="tool-artwork-window">
                    <div className="tool-artwork-titlebar">
                      <span className="tool-artwork-dots"><i /><i /><i /></span>
                      <span>{tool.visualTitle}</span>
                      <img className="tool-artwork-mini-logo" src={`/tool-logos/${tool.logo}`} alt="" />
                    </div>
                    <div className="tool-artwork-screen">
                      <span className="tool-artwork-glyph">
                        <img src={`/tool-logos/${tool.logo}`} alt={`${tool.name} logo`} />
                      </span>
                      <span className="tool-artwork-readout">{tool.visualValue}</span>
                      <span className="tool-artwork-bars"><i /><i /><i /></span>
                    </div>
                    <div className="tool-artwork-status">
                      <span><i /> {tool.visualNote}</span>
                      <span className="tool-artwork-pulse" />
                    </div>
                  </div>
                </div>
                <div className="tool-card-copy">
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                </div>
                <span className="tool-card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
        <p className="tools-note">
          Tools change—fundamentals don’t. Practice in a safe, personal lab and
          follow each platform’s current documentation.
        </p>
      </section>

      <section className="about-section section-wrap scroll-reveal reveal-about" id="about">
        <div className="about-topline"><span>THE PERSON BEHIND THE PORTFOLIO</span><span>2026 / IT CAREER EXPLORATION</span></div>
        <div className="about-content">
          <figure className="about-portrait">
            <img src="/images/profile.png" alt="Carla, the developer of this career portfolio" />
            <figcaption>4TH YEAR BSIT · GRADUATING STUDENT</figcaption>
          </figure>
          <div className="about-copy">
            <span className="eyebrow">ABOUT THE DEVELOPER</span>
            <h2>Hi, I’m Carla.</h2>
            <p className="about-lead">
              I’m a fourth-year Bachelor of Science in Information Technology student and
              graduating soon. I’m exploring how reliable systems make every digital
              experience possible as I prepare for the next step in my IT career.
            </p>
            <div className="about-details">
              <div>
                <span>MY PROGRAM</span>
                <p>BS Information Technology · 4th year · Graduating</p>
              </div>
              <div>
                <span>MY CAREER INTEREST</span>
                <p>System Administration &amp; IT Infrastructure</p>
              </div>
              <div>
                <span>MY PROFESSIONAL GOAL</span>
                <p>
                  Build strong foundations in operating systems, networking, and
                  cloud platforms, then grow into a dependable systems professional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="/" onClick={returnToTop}>
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span>SYSPATH<span className="brand-period">.</span></span>
        </a>
        <p>A career guide to System Administration.</p>
        <a className="back-to-top" href="/" onClick={returnToTop}>BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

export default SysPath;
