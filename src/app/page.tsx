import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CinematicSection } from "@/components/cinematic-section";
import { portableTextToPlainText } from "@/lib/utils";
import {
  getAuthorData,
  getEducation,
  getProjects,
  getWorkExperience,
} from "@/lib/data";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { BackToTop } from "@/components/back-to-top";

const BLUR_FADE_DELAY = 0.04;

export const dynamic = "force-static";
export const revalidate = 604800; // 1 week

export default async function Page() {
  const [author, work, education, projects] = await Promise.all([
    getAuthorData(),
    getWorkExperience(),
    getEducation(),
    getProjects(),
  ]);

  if (!author) return null;

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${author.name?.split(" ")[0] ?? ""}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={portableTextToPlainText(author.description!)}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <Link
                  href={author.resumeUrl ?? "#"}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-fit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </Link>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative group">
                {/* Animated ring effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/50 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Avatar className="size-28 border-2 border-primary/20 relative hover:border-primary/50 transition-all duration-300">
                  <AvatarImage
                    alt={author.name ?? ""}
                    src={author.avatar?.asset?.url ?? ""}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <AvatarFallback>{author.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <PortableText value={author.summary ?? []} />
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {work.map((item, id) => (
            <BlurFade key={item._id} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={item._id}
                logoUrl={item.logo?.asset?.url ?? ""}
                altText={item.company ?? ""}
                title={item.company ?? ""}
                subtitle={item.title ?? ""}
                href={item.url ?? ""}
                period={`${item.startDate} - ${item.endDate ?? "Present"}`}
                description={portableTextToPlainText(item.description!)}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {education.map((item, id) => (
            <BlurFade key={item._id} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={item._id}
                href={item.url ?? ""}
                logoUrl={item.logo?.asset?.url ?? ""}
                altText={item.school ?? ""}
                title={item.school ?? ""}
                subtitle={item.degree ?? ""}
                period={`${item.startDate} - ${item.endDate}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="space-y-4">
            {author.skillCategories?.map((category, catId) => (
              <BlurFade key={category.category} delay={BLUR_FADE_DELAY * 10 + catId * 0.1}>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-muted-foreground">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {category.items.map((skill, id) => (
                      <Badge key={skill} className="transition-transform hover:scale-105">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <CinematicSection />
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          {/* Uniform Grid - All cards same size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[800px] mx-auto">
            {projects.map((project, id) => (
              <BlurFade
                key={project._id}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  key={project._id}
                  title={project.title ?? ""}
                  description={project.description ?? []}
                  tags={project.technologies ?? []}
                  image={project.image?.asset?.url ?? ""}
                  video={project.video ?? ""}
                  links={project.links ?? []}
                  href={project.links?.[0]?.url ?? ""}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Feel free to{" "}
                <Link
                  href={`mailto:${author.social?.email ?? ""}`}
                  className="text-blue-500 hover:underline"
                >
                  send me an email
                </Link>{" "}
                or reach out on{" "}
                <Link
                  href={author.social?.github ?? ""}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
                . I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      <footer className="pb-12 sm:pb-6 border-t border-muted-foreground/10 pt-8 mt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <div className="flex flex-col items-center gap-4">
            {/* Social Links */}
            <div className="flex gap-4">
              {author.social?.github && (
                <Link
                  href={author.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              )}
              {author.social?.linkedin && (
                <Link
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              )}
              {author.social?.email && (
                <Link
                  href={`mailto:${author.social.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </Link>
              )}
            </div>
            {/* Copyright & Built With */}
            <div className="text-center text-xs text-muted-foreground space-y-1">
              <p>© {new Date().getFullYear()} {author.name}. All rights reserved.</p>
              <p>Built with Next.js, React, and Tailwind CSS.</p>
            </div>
          </div>
        </BlurFade>
      </footer>
      <BackToTop />
    </main>
  );
}
