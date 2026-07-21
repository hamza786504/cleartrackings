import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/digital-workflow', label: 'Digital Workflow' },
    { href: '/case-submission', label: 'Submit a Case' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const services = [
    'Clear Aligners',
    'Dental Crowns',
    'Dental Implants',
    'Bridges & Veneers',
    'Dentures & Night Guards',
  ]

  const socialLinks = [
    { href: '#', icon: FaFacebook, label: 'Facebook' },
    { href: '#', icon: FaInstagram, label: 'Instagram' },
    { href: '#', icon: FaLinkedin, label: 'LinkedIn' },
    { href: '#', icon: FaTwitter, label: 'Twitter' },
  ]

  return (
    <footer className="border-t border-border bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logo-PQNkib9h.png"
                alt="Kamfe Dental Lab"
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10"
              />
              <span className="font-display text-lg font-bold">Kamfe Dental Lab</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Precision dental solutions powered by advanced digital technology and expert craftsmanship.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-muted-foreground shadow-card transition-colors hover:text-primary"
                >
                  <social.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 text-primary" />
                <Link href="mailto:info@kamfedentallab.com" className="hover:text-primary">
                  info@kamfedentallab.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                <Link href="tel:+923001188994" className="hover:text-primary">
                  +92 300 1188994
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                <Link href="tel:+923004949488" className="hover:text-primary">
                  +92 300 4949488
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-primary" />
                <span>Kamfe Dental Lab, Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 Kamfe Dental Lab. All rights reserved.
        </div>
      </div>
    </footer>
  )
}