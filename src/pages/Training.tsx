import {
  FileSearch,
  ShieldCheck,
  Activity,
  MessageSquareMore,
  GraduationCap,
  BadgeCheck,
  BookOpen,
  Flame,
  UserCheck,
  Megaphone,
  FileText,
  Eye,
  RefreshCcw,
} from "lucide-react";

function Training() {
  const recruitmentSteps = [
    {
      step: "STEP 01",
      title: "Application Screening",
      desc: "Initial review of identity, eligibility, education and prior employment.",
      icon: FileSearch,
    },
    {
      step: "STEP 02",
      title: "Background Verification",
      desc: "Multi-source criminal, employment and reference verification.",
      icon: ShieldCheck,
    },
    {
      step: "STEP 03",
      title: "Physical Assessment",
      desc: "Medical, fitness and drug-testing to ensure role readiness.",
      icon: Activity,
    },
    {
      step: "STEP 04",
      title: "Interview Process",
      desc: "Structured interview evaluating attitude, communication and judgement.",
      icon: MessageSquareMore,
    },
    {
      step: "STEP 05",
      title: "Training Program",
      desc: "200+ hours of classroom and on-field certified training modules.",
      icon: GraduationCap,
    },
    {
      step: "STEP 06",
      title: "Deployment",
      desc: "Site-specific induction, mentoring and supervised initial shifts.",
      icon: BadgeCheck,
    },
  ];

  const modules = [
    {
      title: "Security Protocols",
      desc: "Standard operating procedures, post orders and patrol techniques.",
      icon: BookOpen,
    },
    {
      title: "Fire Safety",
      desc: "Fire prevention, evacuation drills and extinguisher use.",
      icon: Flame,
    },
    {
      title: "Visitor Management",
      desc: "ID verification, log management and access-control workflows.",
      icon: UserCheck,
    },
    {
      title: "Customer Interaction",
      desc: "Hospitality, soft-skills and conflict de-escalation.",
      icon: MessageSquareMore,
    },
    {
      title: "Emergency Response",
      desc: "First aid, CPR, evacuation and incident coordination.",
      icon: Megaphone,
    },
    {
      title: "Incident Reporting",
      desc: "Accurate, audit-ready documentation and digital reporting.",
      icon: FileText,
    },
  ];

  const qualityItems = [
    {
      title: "Quality Assurance",
      desc: "Field supervisors conduct surprise audits, uniform checks, attendance verifications and post-order reviews — every site, every week.",
      icon: Eye,
    },
    {
      title: "Continuous Monitoring",
      desc: "Our 24/7 command center tracks GPS check-points, incident reports and shift compliance in real time, with monthly client reports.",
      icon: RefreshCcw,
    },
  ];

  return (
    <div>

      {/* HERO */}

      <section className="bg-gradient-to-r from-[#0a1329] via-[#081a45] to-[#092057] text-white pt-32 pb-28">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
            Training & Recruitment
          </p>

          <h1 className="text-6xl font-bold max-w-4xl mt-6 leading-tight">
            Officers built through process, not chance.
          </h1>

          <p className="text-2xl text-slate-300 max-w-4xl mt-8">
            Every PrimeShield officer is selected, trained and supervised
            through a documented, repeatable process — so your site gets a
            professional, every shift.
          </p>

        </div>
      </section>

      {/* RECRUITMENT PROCESS */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
              Recruitment Process
            </p>

            <h2 className="text-6xl font-bold text-[#08152f] mt-4">
              A six-step path from applicant to PrimeShield officer
            </h2>
          </div>

          <div className="space-y-10">

            {recruitmentSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex gap-10">

                  <div className="flex flex-col items-center">
                    <div className="w-22 h-22 rounded-full bg-[#08152f] flex items-center justify-center">
                      <Icon
                        size={36}
                        className="text-yellow-400"
                      />
                    </div>

                    {index !== recruitmentSteps.length - 1 && (
                      <div className="w-[2px] h-32 bg-slate-200" />
                    )}
                  </div>

                  <div className="flex-1 border rounded-3xl p-8">
                    <p className="text-blue-600 font-semibold uppercase">
                      {item.step}
                    </p>

                    <h3 className="text-4xl font-bold text-[#08152f] mt-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xl mt-4">
                      {item.desc}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* TRAINING MODULES */}

      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
              Training Modules
            </p>

            <h2 className="text-6xl font-bold text-[#08152f] mt-4">
              200+ hours of certified training
            </h2>

            <p className="text-2xl text-slate-600 mt-5">
              Combining classroom theory with realistic field simulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {modules.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">
                    <Icon size={30} className="text-blue-600" />
                  </div>

                  <h3 className="text-3xl font-bold text-[#08152f] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-lg">
                    {item.desc}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* QA SECTION */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            {qualityItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="border rounded-3xl p-10"
                >
                  <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-8">
                    <Icon size={30} className="text-yellow-500" />
                  </div>

                  <h3 className="text-4xl font-bold text-[#08152f] mb-6">
                    {item.title}
                  </h3>

                  <p className="text-xl text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-[32px] bg-gradient-to-r from-[#0a1329] via-[#04173f] to-[#17347d] p-14 text-white flex flex-col lg:flex-row justify-between items-center gap-10">

            <div>
              <h2 className="text-5xl font-bold">
                Want to see our training in action?
              </h2>

              <p className="text-slate-300 text-xl mt-5">
                Schedule a visit to a PrimeShield training center or request
                our recruitment & training brief.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl">
                Request Consultation
              </button>

              <button className="border border-white/30 px-8 py-4 rounded-xl">
                Call Now
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Training;