"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  LineChart,
  PieChart,
  ArrowRight,
  Download,
  RefreshCcw,
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
} from "lucide-react"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d")

  return (
    <div className="space-y-6">
      {/* Header with Time Range Selector */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-gray-600">Track your store's performance and customer behavior</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <RefreshCcw className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Revenue" value="$45,231.89" change="+20.1%" trend="up" icon={DollarSign} />
        <MetricCard title="Total Orders" value="1,234" change="+15.3%" trend="up" icon={ShoppingCart} />
        <MetricCard title="Conversion Rate" value="3.2%" change="+0.8%" trend="up" icon={TrendingUp} />
        <MetricCard title="Active Customers" value="2,345" change="+12.5%" trend="up" icon={Users} />
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList className="grid grid-cols-4 md:w-[600px]">
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        {/* Sales Tab */}
        <TabsContent value="sales" className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Revenue Over Time</CardTitle>
                  <CardDescription>Daily revenue for the selected period</CardDescription>
                </div>
                <LineChart className="h-4 w-4 text-gray-500" />
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-[300px] mt-4 flex items-end gap-2">
                {/* Simulated chart with CSS */}
                {[65, 45, 75, 55, 85, 70, 90, 60, 80, 75, 95, 65].map((height, i) => (
                  <div key={i} className="relative flex-1 group">
                    <div
                      className="bg-purple-100 rounded-t-md hover:bg-purple-200 transition-all"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        ${Math.floor(height * 45)}.00
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <p className="text-xl font-bold">$45,231.89</p>
              </div>
              <Button variant="outline" size="sm">
                View Detailed Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Sales by Category</CardTitle>
                    <CardDescription>Product category breakdown</CardDescription>
                  </div>
                  <PieChart className="h-4 w-4 text-gray-500" />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[200px] flex items-center justify-center">
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
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Sales by Time</CardTitle>
                    <CardDescription>Hourly sales distribution</CardDescription>
                  </div>
                  <BarChart3 className="h-4 w-4 text-gray-500" />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-[200px] mt-4 flex items-end gap-1">
                  {/* Simulated hourly chart with CSS */}
                  {[20, 15, 10, 5, 3, 2, 5, 15, 25, 40, 50, 60, 65, 70, 75, 80, 70, 65, 55, 45, 35, 30, 25, 20].map(
                    (height, i) => (
                      <div key={i} className="relative flex-1 group">
                        <div
                          className="bg-purple-100 rounded-t-md hover:bg-purple-200 transition-all"
                          style={{ height: `${height}%` }}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {i}:00 - {i + 1}:00
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>12 AM</span>
                  <span>6 AM</span>
                  <span>12 PM</span>
                  <span>6 PM</span>
                  <span>12 AM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Traffic Tab */}
        <TabsContent value="traffic">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Direct</span>
                    </div>
                    <span className="font-medium">35%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Organic Search</span>
                    </div>
                    <span className="font-medium">28%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Social Media</span>
                    </div>
                    <span className="font-medium">22%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "22%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      <span>Email</span>
                    </div>
                    <span className="font-medium">10%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span>Referral</span>
                    </div>
                    <span className="font-medium">5%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{ width: "5%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="outline" className="w-full">
                View Traffic Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle>Product Performance</CardTitle>
              <CardDescription>Best and worst performing products</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Top Performing Products</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Luxury Lace Front Wig", sales: 124, revenue: "$37,076" },
                      { name: "Natural Curly Bob", sales: 89, revenue: "$16,909" },
                      { name: "Long Straight Wig", sales: 156, revenue: "$24,958" },
                      { name: "Pixie Cut Wig", sales: 78, revenue: "$10,140" },
                      { name: "Wavy Lob Wig", sales: 67, revenue: "$12,730" },
                    ].map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.sales} sales</p>
                        </div>
                        <p className="font-medium">{product.revenue}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Low Performing Products</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Short Curly Wig", sales: 12, revenue: "$1,548" },
                      { name: "Blonde Highlights Wig", sales: 8, revenue: "$1,192" },
                      { name: "Red Ombre Wig", sales: 5, revenue: "$945" },
                    ].map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.sales} sales</p>
                        </div>
                        <p className="font-medium">{product.revenue}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="outline" className="w-full">
                View Complete Product Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Customers Tab */}
        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <CardTitle>Customer Insights</CardTitle>
              <CardDescription>Customer behavior and demographics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Customer Demographics</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Age Group</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1">
                        <div className="space-y-1">
                          <div className="bg-purple-100 h-24 rounded-md" style={{ height: "30px" }}></div>
                          <span className="text-xs text-center block">18-24</span>
                        </div>
                        <div className="space-y-1">
                          <div className="bg-purple-300 h-24 rounded-md" style={{ height: "80px" }}></div>
                          <span className="text-xs text-center block">25-34</span>
                        </div>
                        <div className="space-y-1">
                          <div className="bg-purple-500 h-24 rounded-md" style={{ height: "120px" }}></div>
                          <span className="text-xs text-center block">35-44</span>
                        </div>
                        <div className="space-y-1">
                          <div className="bg-purple-300 h-24 rounded-md" style={{ height: "60px" }}></div>
                          <span className="text-xs text-center block">45-54</span>
                        </div>
                        <div className="space-y-1">
                          <div className="bg-purple-100 h-24 rounded-md" style={{ height: "20px" }}></div>
                          <span className="text-xs text-center block">55+</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Gender</span>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-1 space-y-1">
                          <div className="bg-purple-400 h-8 rounded-md w-[85%]"></div>
                          <span className="text-xs">Female (85%)</span>
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="bg-blue-400 h-8 rounded-md w-[15%]"></div>
                          <span className="text-xs">Male (15%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Customer Behavior</h3>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-lg flex justify-between items-center">
                      <div>
                        <p className="font-medium">Average Order Value</p>
                        <p className="text-sm text-gray-500">Per customer</p>
                      </div>
                      <p className="text-xl font-bold">$85.42</p>
                    </div>
                    <div className="p-3 border rounded-lg flex justify-between items-center">
                      <div>
                        <p className="font-medium">Repeat Purchase Rate</p>
                        <p className="text-sm text-gray-500">Returning customers</p>
                      </div>
                      <p className="text-xl font-bold">42%</p>
                    </div>
                    <div className="p-3 border rounded-lg flex justify-between items-center">
                      <div>
                        <p className="font-medium">Customer Lifetime Value</p>
                        <p className="text-sm text-gray-500">Average per customer</p>
                      </div>
                      <p className="text-xl font-bold">$320.15</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="outline" className="w-full">
                View Customer Report
              </Button>
            </CardFooter>
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
}: {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ElementType
}) {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <div className={`w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600`}>
            <Icon className="h-4 w-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs text-muted-foreground">
          {trend === "up" ? (
            <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
          ) : (
            <TrendingUp className="h-3 w-3 mr-1 text-red-500 rotate-180" />
          )}
          <span className={trend === "up" ? "text-green-500" : "text-red-500"}>{change}</span>
          <span className="ml-1">vs. previous period</span>
        </div>
      </CardContent>
    </Card>
  )
}
