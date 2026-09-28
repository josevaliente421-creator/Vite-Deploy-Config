import { CheckCircle2, FileCheck, ShieldCheck, PackageCheck } from "lucide-react";

const claims = [
  {
    icon: ShieldCheck,
    title: "Resolución Sanitaria al día",
    desc: "Autorizados por la Autoridad Sanitaria",
  },
  {
    icon: FileCheck,
    title: "Documentación SEREMI",
    desc: "Certificados para fiscalizaciones y auditorías",
  },
  {
    icon: PackageCheck,
    title: "Insumos con registro ISP",
    desc: "Productos autorizados en Chile",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-gray-50 border-b border-gray-100 py-10">
      <div className="container mx-auto px-5">
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {claims.map((claim, index) => (
            <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-11 h-11 shrink-0 rounded-full bg-[hsl(168,64%,44%)]/10 flex items-center justify-center">
                <claim.icon className="w-5 h-5 text-[hsl(168,64%,44%)]" />
              </div>
              <div>
                <p className="font-bold text-[hsl(212,32%,16%)] text-sm leading-tight">{claim.title}</p>
                <p className="text-gray-500 text-xs leading-tight mt-0.5">{claim.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(168,64%,44%)]" />
          Programas MIP (Manejo Integrado de Plagas) para empresas en Santiago y la Región Metropolitana
        </p>
      </div>
    </section>
  );
}
