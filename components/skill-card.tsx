import type React from "react"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  icon: React.ReactNode
  name: string
  level?: string
  className?: string
}

export default function SkillCard({ icon, name, level, className }: SkillCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-6 rounded-lg border bg-card text-card-foreground shadow transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className,
      )}
    >
      <div className="text-primary mb-3 text-4xl">{icon}</div>
      <h3 className="font-medium text-lg">{name}</h3>
      {level && <p className="text-sm text-muted-foreground">{level}</p>}
    </div>
  )
}
