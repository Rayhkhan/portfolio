import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

export default function ProjectCard({ title, description, tags, imageUrl, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" className="w-full" size="sm">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>
        </Link>
        <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button className="w-full" size="sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
