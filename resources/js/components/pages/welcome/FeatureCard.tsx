export default function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="group rounded-3xl border border-slate-800 bg-[#161B29] p-8 shadow-sm transition-all duration-500 hover:shadow-blue-500/5 hover:border-slate-700 hover:-translate-y-1 cursor-pointer">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-[#1d7ff0] group-hover:bg-[#1d7ff0] group-hover:text-white transition-all">
                {icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">{desc}</p>
        </div>
    );
}
