"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { LayoutBottomIcon, AudioWave01Icon, CommandIcon, ComputerTerminalIcon, RoboticIcon, BookOpen02Icon, Settings05Icon, CropIcon, PieChartIcon, MapsIcon } from "@hugeicons/core-free-icons"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: (props: any) => (
        <HugeiconsIcon icon={LayoutBottomIcon} strokeWidth={2} {...props} />
      ),
      plan: "Enterprise",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: (props: any) => (
    //     <HugeiconsIcon icon={AudioWave01Icon} strokeWidth={2} {...props} />
    //   ),
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: (props: any) => (
    //     <HugeiconsIcon icon={CommandIcon} strokeWidth={2} {...props} />
    //   ),
    //   plan: "Free",
    // },
  ],
  // navMain: [
  //   {
  //     title: "Playground",
  //     url: "#",
  //     icon: (props: any) => (
  //       <HugeiconsIcon icon={ComputerTerminalIcon} strokeWidth={2} {...props} />
  //     ),
  //     isActive: true,
  //     items: [
  //       { title: "History", url: "#" },
  //       { title: "Starred", url: "#" },
  //       { title: "Settings", url: "#" },
  //     ],
  //   },
  //   {
  //     title: "Models",
  //     url: "#",
  //     icon: (props: any) => (
  //       <HugeiconsIcon icon={RoboticIcon} strokeWidth={2} {...props} />
  //     ),
  //     items: [
  //       { title: "Genesis", url: "#" },
  //       { title: "Explorer", url: "#" },
  //       { title: "Quantum", url: "#" },
  //     ],
  //   },
  //   {
  //     title: "Documentation",
  //     url: "#",
  //     icon: (props: any) => (
  //       <HugeiconsIcon icon={BookOpen02Icon} strokeWidth={2} {...props} />
  //     ),
  //     items: [
  //       { title: "Introduction", url: "#" },
  //       { title: "Get Started", url: "#" },
  //       { title: "Tutorials", url: "#" },
  //       { title: "Changelog", url: "#" },
  //     ],
  //   },
  //   {
  //     title: "Settings",
  //     url: "#",
  //     icon: (props: any) => (
  //       <HugeiconsIcon icon={Settings05Icon} strokeWidth={2} {...props} />
  //     ),
  //     items: [
  //       { title: "General", url: "#" },
  //       { title: "Team", url: "#" },
  //       { title: "Billing", url: "#" },
  //       { title: "Limits", url: "#" },
  //     ],
  //   },
  // ],
  projects: [
    {
      name: "Lender Journey",
      url: "/lenderjourney/form",
      icon: (props: any) => (
        <HugeiconsIcon icon={CropIcon} strokeWidth={2} {...props} />
      ),
    },
    {
      name: "Sales & Marketing",
      url: "/lenderjourney/table",
      icon: (props: any) => (
        <HugeiconsIcon icon={PieChartIcon} strokeWidth={2} {...props} />
      ),
    },
    // {
    //   name: "Travel",
    //   url: "#",
    //   icon: (props: any) => (
    //     <HugeiconsIcon icon={MapsIcon} strokeWidth={2} {...props} />
    //   ),
    // },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* Added 'as any' to bypass the TS mismatch temporarily */}
        <TeamSwitcher teams={data.teams as any} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain as any} /> */}
        <NavProjects projects={data.projects as any} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
