"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import {
  Github,
  Globe,
  ExternalLink,
  Search,
  Brain,
  Zap,
  Webhook,
  MessageSquare,
  Check,
  FileText,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id?: string;
  title: string;
  href?: string;
  description: any[];
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?:
    | {
        title: string | null;
        url: string | null;
        type: string | null;
      }[]
    | null;
  className?: string;
}

// ----------------------------------------------------
// Mockup 1: SEO Sentinel (project-1)
// ----------------------------------------------------
function SEOSentinelMockup() {
  const laserVariants = {
    rest: { top: "0%", opacity: 0 },
    hover: {
      top: ["0%", "100%", "0%"],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
  };

  const badgeVariants = {
    rest: { opacity: 0, scale: 0.8, y: 10 },
    hover: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.15 * i,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
  };

  return (
    <div className="relative w-full h-full bg-[#030712] overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      {/* Background neon grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Laser Sweep line */}
      <motion.div
        variants={laserVariants}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_10px_#3b82f6] z-10 pointer-events-none"
      />

      {/* Top Address bar */}
      <div className="relative z-10 flex items-center justify-between w-full bg-slate-950/80 border border-slate-800 rounded-lg px-2.5 py-1.5 shadow-lg">
        <div className="flex items-center gap-1.5 w-full">
          <Globe className="size-3 text-blue-400 animate-pulse" />
          <span className="text-[9px] text-blue-400 tracking-tight leading-none overflow-hidden text-ellipsis whitespace-nowrap">
            spamscheck.com/audit
          </span>
        </div>
        <div className="flex gap-1">
          <div className="size-1.5 rounded-full bg-red-500/60" />
          <div className="size-1.5 rounded-full bg-yellow-500/60" />
          <div className="size-1.5 rounded-full bg-green-500/60" />
        </div>
      </div>

      {/* Input & Search Simulation */}
      <div className="relative z-10 w-full bg-slate-900/60 border border-slate-800/80 rounded-lg p-2 flex items-center gap-2 mt-1">
        <Search className="size-3 text-slate-500 shrink-0" />
        <div className="text-[9px] text-slate-300 flex-1 overflow-hidden whitespace-nowrap text-left">
          shehz-max.github.io
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1 h-3 bg-blue-400 ml-0.5 align-middle"
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-[8px] px-2 py-0.5 rounded shadow-md shrink-0 transition-colors">
          Scan
        </button>
      </div>

      {/* Results grid */}
      <div className="relative z-10 grid grid-cols-3 gap-2 w-full mt-auto">
        <motion.div
          custom={0}
          variants={badgeVariants}
          className="bg-slate-950/90 border border-emerald-500/30 rounded-lg p-1.5 text-center flex flex-col justify-center shadow-md shadow-emerald-950/20"
        >
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5 leading-none">Spam</span>
          <span className="text-[11px] font-extrabold text-emerald-400 leading-none">1%</span>
        </motion.div>

        <motion.div
          custom={1}
          variants={badgeVariants}
          className="bg-slate-950/90 border border-blue-500/30 rounded-lg p-1.5 text-center flex flex-col justify-center shadow-md shadow-blue-950/20"
        >
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5 leading-none">DA</span>
          <span className="text-[11px] font-extrabold text-blue-400 leading-none">42</span>
        </motion.div>

        <motion.div
          custom={2}
          variants={badgeVariants}
          className="bg-slate-950/90 border border-purple-500/30 rounded-lg p-1.5 text-center flex flex-col justify-center shadow-md shadow-purple-950/20"
        >
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5 leading-none">PA</span>
          <span className="text-[11px] font-extrabold text-purple-400 leading-none">35</span>
        </motion.div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Mockup 2: ClauseGuard (project-2)
// ----------------------------------------------------
function ClauseGuardMockup() {
  const laserVariants = {
    rest: { top: "0%", opacity: 0 },
    hover: {
      top: ["0%", "100%", "0%"],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
  };

  const dialVariants = {
    rest: { pathLength: 0 },
    hover: {
      pathLength: 0.34,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.1 },
    },
  };

  const popupVariants = {
    rest: { opacity: 0, scale: 0.8, x: 20 },
    hover: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.3 },
    },
  };

  return (
    <div className="relative w-full h-full bg-[#f8fafc] dark:bg-slate-900/40 overflow-hidden flex flex-col justify-between p-4 border border-teal-500/10 font-sans select-none">
      {/* Absolute scanner line */}
      <motion.div
        variants={laserVariants}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent shadow-[0_0_10px_#14b8a6] z-10 pointer-events-none"
      />

      {/* Top Header simulation */}
      <div className="relative z-10 flex items-center justify-between w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-1.5 shadow-sm">
        <div className="flex items-center gap-1.5">
          <FileText className="size-3 text-[#1E3A5F] dark:text-[#38bdf8]" />
          <span className="text-[9px] font-bold text-slate-700 dark:text-slate-300 leading-none">vendor_contract.pdf</span>
        </div>
        <span className="text-[7px] font-bold px-1 py-0.5 rounded bg-teal-50 border border-teal-200 text-teal-700 dark:bg-teal-950/40 dark:border-teal-900 dark:text-teal-400 uppercase tracking-wider">
          AI Active
        </span>
      </div>

      {/* Main contract view simulation */}
      <div className="relative z-10 flex gap-3 flex-1 mt-3.5 mb-1.5 items-center">
        {/* Mock legal lines with a highlighted clause */}
        <div className="flex-1 space-y-1.5">
          <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded w-full" />
          <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
          {/* Highlighted clause */}
          <motion.div
            variants={{
              rest: { backgroundColor: "rgba(226, 232, 240, 0.4)", borderLeft: "2px solid transparent" },
              hover: { backgroundColor: "rgba(254, 226, 226, 0.8)", borderLeft: "2px solid #ef4444" }
            }}
            className="h-3 rounded w-full flex items-center px-1 dark:bg-slate-950/20"
          >
            <span className="text-[6px] font-bold text-red-600 dark:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Section 8.2: Unlimited Liability
            </span>
          </motion.div>
          <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded w-4/5" />
          <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded w-2/3" />
        </div>

        {/* Circular Risk Score Dial */}
        <div className="relative size-14 shrink-0 flex items-center justify-center bg-white dark:bg-slate-950 rounded-full border border-slate-100 dark:border-slate-800 shadow-md">
          <svg className="size-12 -rotate-90">
            <circle cx="24" cy="24" r="18" fill="transparent" stroke="#f1f5f9" strokeWidth="3" className="dark:stroke-slate-800" />
            <motion.circle
              cx="24"
              cy="24"
              r="18"
              fill="transparent"
              stroke="#ef4444"
              strokeWidth="3.5"
              strokeDasharray="113.1"
              variants={dialVariants}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <motion.span
              variants={{
                rest: { scale: 0.9 },
                hover: { scale: 1.05 }
              }}
              className="text-[10px] font-extrabold text-[#ef4444] leading-none"
            >
              34
            </motion.span>
            <span className="text-[5px] text-slate-400 font-bold uppercase tracking-wider">Score</span>
          </div>
        </div>
      </div>

      {/* Floating Warnings / Actions list */}
      <div className="relative z-10 flex justify-between gap-2 mt-auto w-full">
        <motion.div
          variants={popupVariants}
          className="flex items-center gap-1 bg-[#fee2e2] dark:bg-red-950/40 text-red-700 dark:text-red-400 text-[8px] font-bold px-2 py-1 rounded-md border border-red-200 dark:border-red-900 shadow-sm"
        >
          <AlertTriangle className="size-2.5 text-red-500 shrink-0" />
          <span>Unlimited Liability</span>
        </motion.div>
        
        <motion.div
          variants={{
            rest: { opacity: 0, scale: 0.8, x: -20 },
            hover: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.4 } }
          }}
          className="flex items-center gap-1 bg-[#d1fae5] dark:bg-green-950/40 text-[#059669] dark:text-green-400 text-[8px] font-bold px-2 py-1 rounded-md border border-green-200 dark:border-green-900 shadow-sm ml-auto"
        >
          <CheckCircle2 className="size-2.5 text-[#059669] dark:text-[#10b981] shrink-0" />
          <span>Auto-renewal</span>
        </motion.div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Mockup 3: Nexus (project-3)
// ----------------------------------------------------
function NexusMockup() {
  const flowVariants1 = {
    rest: { pathLength: 0, opacity: 0.2 },
    hover: {
      pathLength: [0, 1],
      opacity: [0.2, 1, 1, 0.2],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear",
      },
    },
  };

  const nodeGlow = {
    rest: { scale: 1, boxShadow: "0 0 0px rgba(0,0,0,0)" },
    hover: (i: number) => ({
      scale: [1, 1.08, 1],
      boxShadow: [
        "0 0 0px rgba(0,0,0,0)",
        i === 0 ? "0 0 10px rgba(139, 92, 246, 0.4)" : i === 1 ? "0 0 10px rgba(217, 70, 239, 0.4)" : "0 0 10px rgba(14, 165, 233, 0.4)",
        "0 0 0px rgba(0,0,0,0)",
      ],
      transition: {
        delay: 0.4 * i,
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="relative w-full h-full bg-[#07050d] overflow-hidden flex flex-col justify-between p-4 font-sans select-none border border-violet-500/10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)]" />

      {/* Diagram workflow */}
      <div className="relative z-10 flex items-center justify-between flex-1 w-full max-w-[240px] mx-auto">
        {/* Node 1: Webhook */}
        <motion.div
          custom={0}
          variants={nodeGlow}
          className="size-11 rounded-xl bg-violet-955/40 dark:bg-violet-950/40 border border-violet-500/40 flex flex-col items-center justify-center p-1 cursor-pointer text-violet-400 shadow-lg shrink-0"
        >
          <Webhook className="size-4 animate-pulse" />
          <span className="text-[6.5px] mt-0.5 font-bold uppercase tracking-wider text-violet-300">Webhook</span>
        </motion.div>

        {/* SVG connection lines */}
        <div className="relative flex-1 h-6">
          <svg className="w-full h-full" viewBox="0 0 60 20" fill="none">
            <path d="M5 10 H55" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
            <motion.path
              d="M5 10 H55"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeLinecap="round"
              variants={flowVariants1}
            />
          </svg>
        </div>

        {/* Node 2: AI Agent */}
        <motion.div
          custom={1}
          variants={nodeGlow}
          className="size-11 rounded-xl bg-fuchsia-955/40 dark:bg-fuchsia-950/40 border border-fuchsia-500/40 flex flex-col items-center justify-center p-1 cursor-pointer text-fuchsia-400 shadow-lg shrink-0"
        >
          <Brain className="size-4" />
          <span className="text-[6.5px] mt-0.5 font-bold uppercase tracking-wider text-fuchsia-300">AI Agent</span>
        </motion.div>

        {/* SVG connection lines */}
        <div className="relative flex-1 h-6">
          <svg className="w-full h-full" viewBox="0 0 60 20" fill="none">
            <path d="M5 10 H55" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
            <motion.path
              d="M5 10 H55"
              stroke="#d946ef"
              strokeWidth="2"
              strokeLinecap="round"
              variants={flowVariants1}
            />
          </svg>
        </div>

        {/* Node 3: Slack Output */}
        <motion.div
          custom={2}
          variants={nodeGlow}
          className="size-11 rounded-xl bg-sky-955/40 dark:bg-sky-950/40 border border-sky-500/40 flex flex-col items-center justify-center p-1 cursor-pointer text-sky-400 shadow-lg shrink-0"
        >
          <MessageSquare className="size-4" />
          <span className="text-[6.5px] mt-0.5 font-bold uppercase tracking-wider text-sky-300">Slack</span>
        </motion.div>
      </div>

      {/* Bottom saved stats bar */}
      <motion.div
        variants={{
          rest: { y: 15, opacity: 0 },
          hover: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.5 } }
        }}
        className="relative z-10 bg-violet-955/40 dark:bg-violet-950/40 border border-violet-500/20 rounded-lg py-1 px-2.5 flex items-center justify-between w-full mt-2"
      >
        <span className="text-[8px] font-bold text-violet-300 flex items-center gap-1">
          <Zap className="size-2.5 text-yellow-400 fill-yellow-400" />
          Workflow Executed
        </span>
        <span className="text-[8px] font-extrabold text-emerald-400 uppercase tracking-wider">
          15h Saved
        </span>
      </motion.div>
    </div>
  );
}

// ----------------------------------------------------
// Mockup 4: AI ATS Resume (project-4)
// ----------------------------------------------------
function AIATSResumeMockup() {
  const fileDropVariants = {
    rest: { y: -20, opacity: 0, scale: 0.9 },
    hover: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  const ringVariants = {
    rest: { pathLength: 0 },
    hover: {
      pathLength: 0.85,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.4 },
    },
  };

  const tagsVariants = {
    rest: { opacity: 0, y: 15 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 16,
      },
    },
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-slate-900 dark:via-purple-950/20 dark:to-blue-950/20 overflow-hidden flex flex-col justify-between p-4 border border-indigo-500/10 font-sans select-none">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

      {/* Main workspace row */}
      <div className="relative z-10 flex gap-4 items-center flex-1 justify-between">
        {/* Upload Zone simulation */}
        <div className="flex-1 bg-white/75 dark:bg-slate-950/60 border-2 border-dashed border-indigo-300 dark:border-indigo-800 rounded-xl p-2.5 h-[90px] flex items-center justify-center shadow-md shadow-indigo-100 dark:shadow-none">
          <div className="relative flex flex-col items-center">
            {/* Hover-dropping PDF icon */}
            <motion.div variants={fileDropVariants} className="bg-indigo-600 text-white rounded-lg p-1.5 shadow-md flex items-center justify-center shrink-0">
              <FileText className="size-5" />
            </motion.div>
            
            <motion.span
              variants={{
                rest: { opacity: 1, y: 0 },
                hover: { opacity: 0, y: 10, transition: { duration: 0.2 } }
              }}
              className="text-[8px] font-bold text-slate-400 mt-1 uppercase tracking-wider text-center"
            >
              Drop CV Here
            </motion.span>
          </div>
        </div>

        {/* ATS score gauge */}
        <div className="relative size-16 shrink-0 flex items-center justify-center bg-white dark:bg-slate-950 rounded-full border border-indigo-100 dark:border-indigo-900 shadow-lg">
          <svg className="size-14 -rotate-90">
            <circle cx="28" cy="28" r="22" fill="transparent" stroke="#f1f5f9" strokeWidth="3" className="dark:stroke-slate-800" />
            <motion.circle
              cx="28"
              cy="28"
              r="22"
              fill="transparent"
              stroke="#6366f1"
              strokeWidth="3.5"
              strokeDasharray="138.2"
              variants={ringVariants}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center leading-none">
            <motion.span
              variants={{
                rest: { scale: 0.9 },
                hover: { scale: 1.05 }
              }}
              className="text-xs font-black text-indigo-600 dark:text-indigo-400"
            >
              85%
            </motion.span>
            <span className="text-[5px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Match</span>
          </div>
        </div>
      </div>

      {/* Recommended Keywords tags (added to CV) */}
      <motion.div variants={tagsVariants} className="relative z-10 flex flex-wrap gap-1.5 items-center w-full mt-2">
        <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-wider mr-1">Suggested:</span>
        <span className="text-[8px] bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-extrabold px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-900 shadow-sm leading-none flex items-center gap-0.5">
          <Check className="size-2 shrink-0 stroke-[3]" /> Next.js
        </span>
        <span className="text-[8px] bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-extrabold px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-900 shadow-sm leading-none flex items-center gap-0.5">
          <Check className="size-2 shrink-0 stroke-[3]" /> TypeScript
        </span>
      </motion.div>
    </div>
  );
}

export function ProjectCard({
  id,
  title,
  href,
  description,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <motion.div
      className="group relative flex flex-col h-full"
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        hover: { y: -6 },
        rest: { y: 0 }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Glow halo */}
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-foreground/20 via-foreground/5 to-foreground/10 blur-sm pointer-events-none" />

      <div
        className={cn(
          "relative flex flex-col h-full rounded-2xl overflow-hidden",
          "bg-card border border-border/60",
          "group-hover:border-foreground/20 transition-all duration-500",
          "group-hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.4)]",
          className
        )}
      >
        {/* Image / Mockup container */}
        <div className="relative overflow-hidden aspect-video flex-shrink-0 bg-slate-900 border-b border-border/40 select-none">
          {id === "project-1" ? (
            <SEOSentinelMockup />
          ) : id === "project-2" ? (
            <ClauseGuardMockup />
          ) : id === "project-3" ? (
            <NexusMockup />
          ) : id === "project-4" ? (
            <AIATSResumeMockup />
          ) : image ? (
            <>
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <Image
                src={image}
                alt={title}
                width={600}
                height={340}
                unoptimized
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
              />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center">
              <Globe className="w-12 h-12 text-foreground/20" />
            </div>
          )}

          {/* Live demo quick-launch button on hover */}
          {links?.find((l) => l.type === "demo")?.url && (
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                href={links.find((l) => l.type === "demo")!.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm text-sm font-semibold text-foreground border border-border/60 hover:bg-foreground hover:text-background transition-all duration-200 shadow-lg"
              >
                <ExternalLink className="size-3.5" />
                Open Project
              </Link>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Title */}
          <h3 className="font-bold text-base tracking-tight text-foreground group-hover:text-foreground/90 transition-colors leading-snug">
            {title}
          </h3>

          {/* Description */}
          <div className="prose prose-sm max-w-full font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-3 leading-relaxed flex-1">
            <PortableText value={description} />
          </div>

          {/* Tech badges */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-foreground/5 text-foreground/60 border border-foreground/10 group-hover:border-foreground/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action buttons */}
          {links && links.length > 0 && (
            <div className="flex gap-2 pt-2 mt-auto">
              {links.map((link, idx) => {
                const isCode = link.type === "code";
                return (
                  <Link
                    key={idx}
                    href={link.url ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold flex-1 justify-center transition-all duration-200",
                      isCode
                        ? "bg-foreground/5 text-foreground/70 border border-foreground/10 hover:bg-foreground hover:text-background hover:border-transparent"
                        : "bg-foreground text-background hover:bg-foreground/80"
                    )}
                  >
                    {isCode ? (
                      <Github className="size-3.5 shrink-0" />
                    ) : (
                      <Globe className="size-3.5 shrink-0" />
                    )}
                    {link.title}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
