import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Github, Globe } from "lucide-react";

interface Props {
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

export function ProjectCard({
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
    <div className="group relative">
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500" />

      <Card
        className="relative flex flex-col overflow-hidden border border-muted-foreground/10 bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 ease-out h-full dark:hover:border-primary/70 hover:scale-[1.02]"
      >
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <Link
          href={href || "#"}
          className={cn("block cursor-pointer overflow-hidden relative bg-muted/30", className)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <div className="relative w-full aspect-[16/10]">
            <Image
              src={image || ""}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              unoptimized
              className="object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
          </div>
        </Link>

        <CardHeader className="px-4 py-4 space-y-2 relative z-20">
          <div className="space-y-2">
            <CardTitle className="text-lg font-bold tracking-tight text-primary/90 group-hover:text-primary transition-colors duration-300">
              {title}
            </CardTitle>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-3">
              <PortableText value={description} />
            </div>
          </div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col px-4 pb-2 relative z-20">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <Badge
                  className="px-2 py-0.5 text-[10px] bg-secondary/50 hover:bg-secondary text-secondary-foreground transition-all duration-300 hover:scale-105"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="px-4 pb-4 relative z-20">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-2 w-full">
              {links?.map((link, idx) => (
                <Link href={link?.url ?? ""} key={idx} target="_blank" className="flex-1">
                  <Badge
                    key={idx}
                    variant="outline"
                    className="flex gap-2 px-3 py-1.5 text-[11px] justify-center items-center w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg group/badge"
                  >
                    {link.type === "code" ? (
                      <Github className="size-3.5 transition-transform group-hover/badge:rotate-12" />
                    ) : (
                      <Globe className="size-3.5 transition-transform group-hover/badge:rotate-12" />
                    )}
                    {link.title}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
