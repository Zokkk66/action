import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';

const projects = [
  {
    num: '01',
    name: 'Nextlevel Studio',
    category: '(Client)',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    num: '02',
    name: 'Aura Brand Identity',
    category: '(Personal)',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    num: '03',
    name: 'Solaris Digital',
    category: '(Client)',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[0];
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-24 h-[85vh] md:top-32"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="flex h-full flex-col overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        {/* 顶部信息行 */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#D7E2EA]">
            {project.num}
          </span>
          <div className="flex flex-col">
            <span className="text-[clamp(0.85rem,1.6vw,1.25rem)] font-light uppercase text-[#D7E2EA]/60">
              {project.category}
            </span>
            <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase text-white">
              {project.name}
            </h3>
          </div>
          <div className="ml-auto">
            <LiveProjectButton />
          </div>
        </div>

        {/* 图片网格 */}
        <div
          className="mt-4 grid min-h-0 flex-1 grid-cols-[40%_60%] gap-3 sm:mt-6 sm:gap-4"
          style={{
            gridTemplateRows:
              'minmax(0, clamp(130px, 16vw, 230px)) minmax(0, clamp(160px, 22vw, 340px))',
          }}
        >
          <img
            src={project.images.col1Top}
            alt=""
            loading="lazy"
            className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
          />
          <img
            src={project.images.col2}
            alt=""
            loading="lazy"
            className="col-start-2 row-span-2 row-start-1 h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
          />
          <img
            src={project.images.col1Bottom}
            alt=""
            loading="lazy"
            className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]">
      <h2 className="hero-heading py-10 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:py-14 md:py-20">
        Project
      </h2>

      {projects.map((project, i) => (
        <ProjectCard
          key={project.num}
          project={project}
          index={i}
          totalCards={projects.length}
        />
      ))}

      {/* 底部占位，确保最后一张卡片有足够空间 */}
      <div className="h-[85vh]" />
    </section>
  );
}
