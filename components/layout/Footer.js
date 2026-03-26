import Link from "next/link";
import { Code2, Github, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
    Courses: [
        { label: "React Development", href: "/courses/complete-react-development" },
        { label: "Next.js Bootcamp", href: "/courses/nextjs-fullstack-bootcamp" },
        { label: "Modern CSS", href: "/courses/modern-css-mastery" },
        { label: "Node & Express", href: "/courses/node-express-api-development" },
    ],
    Templates: [
        { label: "SaaS Landing Page", href: "/templates/saas-landing-page" },
        { label: "Developer Portfolio", href: "/templates/developer-portfolio" },
        { label: "E-Commerce Store", href: "/templates/ecommerce-store-template" },
        { label: "Admin Dashboard", href: "/templates/admin-dashboard-template" },
    ],
    Company: [
        { label: "About", href: "/#about" },
        { label: "Testimonials", href: "/#testimonials" },
        { label: "Cart", href: "/cart" },
        { label: "Admin", href: "/admin" },
    ],
};

const socials = [
    { icon: Github, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-[#1A1A2E] border-t border-white/10 pt-16 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                            <div className="w-8 h-8 bg-[#6C63FF] rounded-lg flex items-center justify-center">
                                <Code2 size={18} className="text-white" />
                            </div>
                            <span className="text-white">
                                Dev<span className="text-[#6C63FF]">Trainer</span>
                            </span>
                        </Link>
                        <p className="text-[#A0A0B0] text-sm leading-relaxed mb-6 max-w-xs">
                            Learn modern web development with hands-on courses and download professional templates to accelerate your projects.
                        </p>
                        <div className="flex gap-3">
                            {socials.map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-9 h-9 bg-white/5 hover:bg-[#6C63FF] border border-white/10 rounded-lg flex items-center justify-center text-[#A0A0B0] hover:text-white transition-all duration-200"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-white font-semibold mb-4 text-sm">{title}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-[#A0A0B0] hover:text-white text-sm transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#A0A0B0] text-sm">&copy; 2025 DevTrainer. All rights reserved.</p>
                    <p className="text-[#A0A0B0] text-sm">
                        Built with <span className="text-[#6C63FF]">Next.js</span> & <span className="text-[#6C63FF]">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
