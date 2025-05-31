"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const customers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 (555) 123-4567",
    orders: 8,
    totalSpent: 1299.92,
    lastOrder: "2024-01-15",
    status: "active",
    location: "New York, NY",
    joinDate: "2023-06-15",
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria@example.com",
    phone: "+1 (555) 234-5678",
    orders: 5,
    totalSpent: 849.95,
    lastOrder: "2024-01-12",
    status: "active",
    location: "Los Angeles, CA",
    joinDate: "2023-08-22",
  },
  {
    id: 3,
    name: "Jessica Chen",
    email: "jessica@example.com",
    phone: "+1 (555) 345-6789",
    orders: 12,
    totalSpent: 2199.88,
    lastOrder: "2024-01-10",
    status: "vip",
    location: "Chicago, IL",
    joinDate: "2023-03-10",
  },
  {
    id: 4,
    name: "Amanda Wilson",
    email: "amanda@example.com",
    phone: "+1 (555) 456-7890",
    orders: 2,
    totalSpent: 329.98,
    lastOrder: "2024-01-08",
    status: "active",
    location: "Houston, TX",
    joinDate: "2023-11-05",
  },
  {
    id: 5,
    name: "Lisa Brown",
    email: "lisa@example.com",
    phone: "+1 (555) 567-8901",
    orders: 1,
    totalSpent: 189.99,
    lastOrder: "2023-12-20",
    status: "inactive",
    location: "Phoenix, AZ",
    joinDate: "2023-12-15",
  },
]

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { variant: "default" as const, className: "bg-green-100 text-green-800" },
      vip: { variant: "default" as const, className: "bg-purple-100 text-purple-800" },
      inactive: { variant: "secondary" as const, className: "bg-gray-100 text-gray-800" },
    }
    
    const config = statusConfig[status as keyof typeof statusConfig]
    
    return (
      <Badge variant={config.variant} className={config
