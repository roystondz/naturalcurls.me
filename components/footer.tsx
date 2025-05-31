import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">NaturalCurls</h3>
            <p className="text-gray-300 mb-4">
              Your premier destination for high-quality curly wigs and natural hair accessories. Embrace your curls with
              confidence.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-purple-400">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-purple-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-purple-400">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-purple-400">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-purple-400">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=lace-front" className="text-gray-300 hover:text-purple-400">
                  Lace Front Wigs
                </Link>
              </li>
              <li>
                <Link href="/products?category=synthetic" className="text-gray-300 hover:text-purple-400">
                  Synthetic Wigs
                </Link>
              </li>
              <li>
                <Link href="/products?category=human-hair" className="text-gray-300 hover:text-purple-400">
                  Human Hair Wigs
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-300 hover:text-purple-400">
                  Sale Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-purple-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-purple-400">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-purple-400">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-300 hover:text-purple-400">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/care-guide" className="text-gray-300 hover:text-purple-400">
                  Wig Care Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-purple-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">1-800-NATURAL-CURLS</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">support@naturalcurls.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">New York, NY</span>
              </div>
            </div>

            <h5 className="font-medium mb-2">Newsletter</h5>
            <p className="text-gray-300 text-sm mb-3">Subscribe for exclusive offers and styling tips</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© 2024 NaturalCurls. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-purple-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-purple-400 text-sm">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-300 hover:text-purple-400 text-sm">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
