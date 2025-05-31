"use client"

import type React from "react"
import { Suspense } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Plus,
  Eye,
  Bell,
  Search,
  User,
  ChevronDown,
  Home,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    title: "Overview",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: Package,
    badge: "3",
  },
  {
    title: "Orders",
    url: "/admin/orders",
    icon: ShoppingCart,
    badge: "12",
  },
  {
    title: "Customers",
    url: "/admin/customers",
    icon: Users,
  },
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex min-h-screen w-full bg-gray-50">
          <Sidebar className="border-r border-gray-200 bg-white">
            <SidebarHeader className="border-b border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">NC</span>
                </div>
                <div>
                  <h1 className="font-bold text-xl">NaturalCurls</h1>
                  <p className="text-xs text-gray-500">Admin Portal</p>
                </div>
              </div>
            </SidebarHeader>

            <SidebarContent className="p-4">
              <div className="mb-6">
                <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/admin/products/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Product
                  </Link>
                </Button>
              </div>

              <SidebarGroup>
                <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Main Menu
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className="space-y-2">
                    {menuItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.url || pathname.startsWith(item.url + "/")}
                          className="w-full justify-between rounded-lg h-11 px-3"
                        >
                          <Link href={item.url}>
                            <div className="flex items-center">
                              <item.icon className="h-5 w-5 mr-3" />
                              <span className="font-medium">{item.title}</span>
                            </div>
                            {item.badge && (
                              <Badge variant="secondary" className="ml-auto text-xs bg-purple-100 text-purple-700">
                                {item.badge}
                              </Badge>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin User" />
                  <AvatarFallback className="bg-purple-100 text-purple-600 font-semibold">AU</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Admin User</p>
                  <p className="text-xs text-gray-500 truncate">admin@naturalcurls.com</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>
                      <User className="h-4 w-4 mr-2" />
                      Profile Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="h-4 w-4 mr-2" />
                      Preferences
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SidebarFooter>
          </Sidebar>

          <div className="flex-1 flex flex-col">
            <header className="border-b bg-white px-6 py-4 sticky top-0 z-10 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <SidebarTrigger />
                  <div className="relative max-w-md hidden md:block">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="search"
                      placeholder="Search products, orders, customers..."
                      className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      3
                    </span>
                  </Button>

                  <Button variant="outline" size="icon" asChild>
                    <Link href="/" target="_blank">
                      <Eye className="h-5 w-5" />
                    </Link>
                  </Button>

                  <div className="flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-700 font-medium">Store Online</span>
                  </div>
                </div>
              </div>
            </header>

            <main className="flex-1 p-6 overflow-auto">{children}</main>

            <footer className="border-t border-gray-200 bg-white px-6 py-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>© 2024 NaturalCurls Admin Portal. All rights reserved.</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Version 1.0.0</span>
                  <Link href="/admin/help" className="hover:text-purple-600">
                    Help
                  </Link>
                  <Link href="/admin/support" className="hover:text-purple-600">
                    Support
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </Suspense>
    </SidebarProvider>
  )
}
