"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Plus,
  ArrowRight,
  BarChart3,
  LineChart,
  PieChart,
  Bell,
  CheckCircle,
  RefreshCcw,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AdminDashboardPage() {
  const [timeRange, setTimeRange] = useState("7d")

  return (
    <div className="space-y-6">
      {/* Header with Time Range Selector */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your business at a glance.</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1%"
          trend="up"
          icon={DollarSign}
          chartData={[35, 60, 45, 50, 55, 70, 95]}
          color="blue"
        />
        <MetricCard
          title="Total Orders"
          value="1,234"
          change="+15.3%"
          trend="up"
          icon={ShoppingCart}
          chartData={[20, 45, 30, 35, 40, 50, 65]}
          color="green"
        />
        <MetricCard
          title="Total Products"
          value="567"
          change="+5.2%"
          trend="up"
          icon={Package}
          chartData={[45, 50, 55, 60, 55, 60, 65]}
          color="purple"
        />
        <MetricCard
          title="Total Customers"
          value="2,345"
          change="+12.5%"
          trend="up"
          icon={Users}
          chartData={[30, 40, 35, 45, 40, 50, 60]}
          color="amber"
        />
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>Daily revenue for the past week</CardDescription>
                  </div>
                  <BarChart3 className="h-4 w-4 text-gray-500" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-[240px] mt-4 flex items-end gap-2">
                  {[65, 45, 75, 55, 85, 70, 90].map((height, i) => (
                    <div key={i} className="relative flex-1 group">
                      <div
                        className="bg-blue-100 rounded-t-md hover:bg-blue-200 transition-all"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          ${Math.floor(height * 45)}.00
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Weekly Revenue</p>
                  <p className="text-xl font-bold">$12,845.00</p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/analytics">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Sales Distribution</CardTitle>
                    <CardDescription>Product category breakdown</CardDescription>
                  </div>
                  <PieChart className="h-4 w-4 text-gray-500" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-[240px] flex items-center justify-center">
                  <div className="relative w-[180px] h-[180px] rounded-full">
                    {/* Simulated pie chart with CSS */}
                    <div className="absolute inset-0 bg-purple-500 rounded-full"></div>
                    <div
                      className="absolute inset-0 bg-blue-500 rounded-full"
                      style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 50% 100%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 bg-green-500 rounded-full"
                      style={{ clipPath: "polygon(50% 50%, 100% 100%, 0 100%, 0 70%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 bg-amber-500 rounded-full"
                      style={{ clipPath: "polygon(50% 50%, 0 70%, 0 0, 30% 0)" }}
                    ></div>
                    <div
                      className="absolute inset-0 bg-pink-500 rounded-full"
                      style={{ clipPath: "polygon(50% 50%, 30% 0, 100% 0)" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white w-[120px] h-[120px] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Lace Front (35%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Synthetic (25%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Human Hair (20%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-sm">Bob Wigs (15%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">Other (5%)</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Best Performing</p>
                  <p className="text-md font-medium">Lace Front Wigs</p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/admin/products">
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Recent Orders & Activity */}
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Latest customer purchases</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/admin/orders">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4 mt-4">
                  {[
                    {
                      id: "ORD-001",
                      customer: "Sarah Johnson",
                      product: "Luxury Lace Front Wig",
                      amount: "$299.99",
                      status: "completed",
                      date: "2 hours ago",
                    },
                    {
                      id: "ORD-002",
                      customer: "Maria Garcia",
                      product: "Natural Curly Bob",
                      amount: "$189.99",
                      status: "processing",
                      date: "4 hours ago",
                    },
                    {
                      id: "ORD-003",
                      customer: "Jessica Chen",
                      product: "Long Straight Wig",
                      amount: "$159.99",
                      status: "shipped",
                      date: "6 hours ago",
                    },
                    {
                      id: "ORD-004",
                      customer: "Amanda Wilson",
                      product: "Pixie Cut Wig",
                      amount: "$129.99",
                      status: "pending",
                      date: "8 hours ago",
                    },
                  ].map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <ShoppingCart className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium">{order.product}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">{order.customer}</span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-sm text-gray-500">{order.id}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{order.amount}</p>
                        <div className="flex items-center justify-end gap-1">
                          <Badge
                            variant={
                              order.status === "completed"
                                ? "default"
                                : order.status === "processing"
                                  ? "secondary"
                                  : order.status === "shipped"
                                    ? "outline"
                                    : "destructive"
                            }
                            className="text-xs"
                          >
                            {order.status}
                          </Badge>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{order.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>System events & notifications</CardDescription>
                  </div>
                  <Bell className="h-4 w-4 text-gray-500" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4 mt-4">
                  {[
                    {
                      message: "New order #ORD-001 received",
                      time: "2 minutes ago",
                      status: "success",
                      icon: ShoppingCart,
                    },
                    {
                      message: "Product 'Luxury Lace Front Wig' low stock alert",
                      time: "15 minutes ago",
                      status: "warning",
                      icon: AlertTriangle,
                    },
                    {
                      message: "New customer registration: Sarah Johnson",
                      time: "1 hour ago",
                      status: "info",
                      icon: Users,
                    },
                    {
                      message: "Order #ORD-002 shipped",
                      time: "2 hours ago",
                      status: "success",
                      icon: Package,
                    },
                    {
                      message: "Daily backup completed successfully",
                      time: "3 hours ago",
                      status: "success",
                      icon: CheckCircle,
                    },
                  ].map((activity, index) => {
                    const Icon = activity.icon
                    return (
                      <div key={index} className="flex gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            activity.status === "success"
                              ? "bg-green-100 text-green-600"
                              : activity.status === "warning"
                                ? "bg-amber-100 text-amber-600"
                                : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="ghost" size="sm" className="w-full">
                  View All Notifications
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Top Products & Quick Actions */}
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Top Performing Products</CardTitle>
                    <CardDescription>Best selling items this month</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/admin/products">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4 mt-4">
                  {[
                    {
                      id: 1,
                      name: "Luxury Lace Front Wig",
                      image: "/placeholder.svg?height=60&width=60",
                      sales: 124,
                      revenue: "$37,076",
                      growth: "+15%",
                    },
                    {
                      id: 2,
                      name: "Natural Curly Bob",
                      image: "/placeholder.svg?height=60&width=60",
                      sales: 89,
                      revenue: "$16,909",
                      growth: "+8%",
                    },
                    {
                      id: 3,
                      name: "Long Straight Wig",
                      image: "/placeholder.svg?height=60&width=60",
                      sales: 156,
                      revenue: "$24,958",
                      growth: "+22%",
                    },
                  ].map((product, index) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={60}
                          height={60}
                          className="rounded-md object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{product.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">{product.sales} sales</span>
                          <div className="w-full max-w-24">
                            <Progress value={index === 0 ? 100 : index === 1 ? 72 : 85} className="h-1" />
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{product.revenue}</p>
                        <p className="text-sm text-green-600">{product.growth}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-20 flex-col" asChild>
                    <Link href="/admin/products/new">
                      <Plus className="h-5 w-5 mb-1" />
                      <span>Add Product</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col" asChild>
                    <Link href="/admin/orders">
                      <ShoppingCart className="h-5 w-5 mb-1" />
                      <span>View Orders</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col" asChild>
                    <Link href="/admin/customers">
                      <Users className="h-5 w-5 mb-1" />
                      <span>Customers</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col" asChild>
                    <Link href="/admin/analytics">
                      <LineChart className="h-5 w-5 mb-1" />
                      <span>Analytics</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="w-full p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-center gap-2 text-amber-800 mb-1">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="font-medium">Low Stock Alert</span>
                  </div>
                  <p className="text-sm text-amber-700 mb-2">3 products are running low on stock.</p>
                  <Button variant="outline" size="sm" className="w-full bg-white" asChild>
                    <Link href="/admin/products?filter=low_stock">View Items</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed performance metrics and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-[400px] text-gray-500">
                <div className="text-center">
                  <LineChart className="h-16 w-16 mx-auto mb-4 opacity-30" />
                  <p>Detailed analytics content will be displayed here.</p>
                  <p className="text-sm">Select different metrics and time ranges to analyze your data.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view business reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-[400px] text-gray-500">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-30" />
                  <p>Report generation tools will be displayed here.</p>
                  <p className="text-sm">Create custom reports for sales, inventory, and customer data.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>System alerts and messages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-[400px] text-gray-500">
                <div className="text-center">
                  <Bell className="h-16 w-16 mx-auto mb-4 opacity-30" />
                  <p>All system notifications will be displayed here.</p>
                  <p className="text-sm">Configure notification preferences in settings.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function MetricCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  chartData,
  color,
}: {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ElementType
  chartData: number[]
  color: "blue" | "green" | "purple" | "amber"
}) {
  const colorMap = {
    blue: {
      bg: "bg-blue-500",
      light: "bg-blue-100",
      text: "text-blue-600",
    },
    green: {
      bg: "bg-green-500",
      light: "bg-green-100",
      text: "text-green-600",
    },
    purple: {
      bg: "bg-purple-500",
      light: "bg-purple-100",
      text: "text-purple-600",
    },
    amber: {
      bg: "bg-amber-500",
      light: "bg-amber-100",
      text: "text-amber-600",
    },
  }

  const colors = colorMap[color]

  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <div className={`w-8 h-8 rounded-full ${colors.light} flex items-center justify-center ${colors.text}`}>
            <Icon className="h-4 w-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs text-muted-foreground">
          {trend === "up" ? (
            <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
          ) : (
            <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
          )}
          <span className={trend === "up" ? "text-green-500" : "text-red-500"}>{change}</span>
          <span className="ml-1">vs. previous period</span>
        </div>
      </CardContent>
      <div className="px-6 pb-4 h-[40px] flex items-end gap-[2px]">
        {chartData.map((value, i) => (
          <div key={i} className={`flex-1 ${colors.light} rounded-sm`} style={{ height: `${value}%` }}></div>
        ))}
      </div>
    </Card>
  )
}
