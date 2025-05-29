"use client"

import { useState } from "react"
import SkillCard from "./skill-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Code,
    Database,
    Layers,
    Palette,
    Server,
    Terminal,
    Wand2,
    Figma,
    Github,
    Chrome,
    Cpu,
    LineChart,
    Smartphone,
} from "lucide-react"

const frontendSkills = [
    { icon: <Code />, name: "HTML/CSS", level: "Expert" },
    { icon: <Code />, name: "JavaScript", level: "Expert" },
    { icon: <Code />, name: "TypeScript", level: "Advanced" },
    { icon: <Code />, name: "React", level: "Expert" },
    { icon: <Code />, name: "Next.js", level: "Advanced" },
    { icon: <Palette />, name: "Tailwind CSS", level: "Expert" },
    { icon: <Layers />, name: "Redux", level: "Advanced" },
    { icon: <Wand2 />, name: "Framer Motion", level: "Intermediate" },
]

const backendSkills = [
    { icon: <Server />, name: "Node.js", level: "Advanced" },
    { icon: <Server />, name: "Express", level: "Advanced" },
    { icon: <Database />, name: "MongoDB", level: "Intermediate" },
    { icon: <Database />, name: "PostgreSQL", level: "Intermediate" },
    { icon: <Database />, name: "MySQL", level: "Intermediate" },
    { icon: <Server />, name: "REST APIs", level: "Expert" },
    { icon: <Terminal />, name: "Supabase", level: "Intermediate" },
    { icon: <Database />, name: "Firebase", level: "Advanced" },
]

const toolsSkills = [
    { icon: <Github />, name: "Git/GitHub", level: "Expert" },
    { icon: <Figma />, name: "Figma", level: "Advanced" },
    { icon: <Terminal />, name: "Docker", level: "Intermediate" },
    { icon: <Terminal />, name: "CI/CD", level: "Intermediate" },
    { icon: <Chrome />, name: "Testing", level: "Advanced" },
    { icon: <LineChart />, name: "Performance Optimization", level: "Advanced" },
    { icon: <Smartphone />, name: "Responsive Design", level: "Expert" },
    { icon: <Terminal />, name: "AWS", level: "Intermediate" },
]


export default function SkillTabs() {
    const [activeTab, setActiveTab] = useState("frontend")

    return (
        <div className="container py-12 md:py-20">

            {/* Skills Categories */}
            <Tabs defaultValue="frontend" className="mb-16" onValueChange={setActiveTab}>
                <div className="flex justify-center mb-8">
                    <TabsList className="grid grid-cols-2 md:grid-cols-3 gap-2 ">
                        <TabsTrigger value="frontend" className="data-[state=active]:border">Frontend</TabsTrigger>
                        <TabsTrigger value="backend" className="data-[state=active]:border">Backend</TabsTrigger>
                        <TabsTrigger value="tools" className="data-[state=active]:border">Tools & Others</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="frontend" className="mt-0">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {frontendSkills.map((skill, index) => (
                            <SkillCard key={index} icon={skill.icon} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="backend" className="mt-0">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {backendSkills.map((skill, index) => (
                            <SkillCard key={index} icon={skill.icon} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="tools" className="mt-0">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {toolsSkills.map((skill, index) => (
                            <SkillCard key={index} icon={skill.icon} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>

            {/* Skill Level Legend */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    Expert
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    Advanced
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    Intermediate
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                    Basic
                </div>
            </div>
        </div>
    )
}
