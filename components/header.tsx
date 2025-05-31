"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartItemCount = 3 // This would come from your cart state

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b">
          <div className="hidden md:block text-gray-600">Free shipping on orders over $150 | 30-day curl guarantee</div>
          <div className="flex items-center gap-4">
            <Link href="/help" className="text-gray-600 hover:text-purple-600">
              Help
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-purple-600">
              Contact
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-purple-600">
            NaturalCurls
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-purple-600">Shop</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/products?category=lace-front">Lace Front Wigs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products?category=synthetic">Synthetic Wigs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products?category=human-hair">Human Hair Wigs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products?category=bob">Bob Wigs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products">All Products</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about" className="text-gray-700 hover:text-purple-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="search" placeholder="Search for wigs..." className="pl-10 pr-4" />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/register">Create Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/account">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/orders">Order History</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* Mobile menu */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-purple-600">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-purple-600">
                All Products
              </Link>
              <Link href="/products?category=lace-front" className="text-gray-700 hover:text-purple-600">
                Lace Front Wigs
              </Link>
              <Link href="/products?category=synthetic" className="text-gray-700 hover:text-purple-600">
                Synthetic Wigs
              </Link>
              <Link href="/products?category=human-hair" className="text-gray-700 hover:text-purple-600">
                Human Hair Wigs
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
