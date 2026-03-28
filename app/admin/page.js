"use client";
import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  FileCode,
  ShoppingBag,
  Users,
  TrendingUp,
  DollarSign,
  Eye,
  Trash2,
  Plus,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";
import { courses } from "@/data/courses";
import { templates } from "@/data/templates";

const stats = [
  { label: "Total Revenue", value: "$12,840", change: "+18%", icon: DollarSign, color: "#6C63FF" },
  { label: "Total Students", value: "5,240", change: "+12%", icon: Users, color: "#FF6584" },
  { label: "Courses Sold", value: "1,380", change: "+8%", icon: BookOpen, color: "#68A063" },
  { label: "Templates Sold", value: "420", change: "+24%", icon: FileCode, color: "#F59E0B" },
];

const recentOrders = [
  { id: "#ORD-001", customer: "Sarah Johnson", item: "Complete React Development", amount: "$49", status: "Completed" },
  { id: "#ORD-002", customer: "Ahmed Hassan", item: "SaaS Landing Page", amount: "$19", status: "Completed" },
  { id: "#ORD-003", customer: "Priya Sharma", item: "Next.js Bootcamp", amount: "$59", status: "Pending" },
  { id: "#ORD-004", customer: "John Smith", item: "Developer Portfolio", amount: "$15", status: "Completed" },
  { id: "#ORD-005", customer: "Lisa Wang", item: "Modern CSS Mastery", amount: "$29", status: "Refunded" },
];

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, id: "dashboard" },
  { label: "Courses", icon: BookOpen, id: "courses" },
  { label: "Templates", icon: FileCode, id: "templates" },
  { label: "Orders", icon: ShoppingBag, id: "orders" },
  { label: "Students", icon: Users, id: "students" },
];

const statusColor = {
  Completed: "bg-green-500/20 text-green-400",
  Pending: "bg-yellow-500/20 text-yellow-400",
  Refunded: "bg-red-500/20 text-red-400",
};

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F0F1A] flex">

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1A1A2E] border-r border-white/10 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
          <span className="text-white font-bold text-lg">
            Trainer Dashboard
          </span>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-[#A0A0B0]">
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-[#6C63FF] text-white"
                  : "text-[#A0A0B0] hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-xl p-4">
            <div className="text-white text-sm font-semibold mb-1">Pro Plan Active</div>
            <div className="text-[#A0A0B0] text-xs">All features unlocked</div>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top Bar */}
        <header className="h-16 bg-[#1A1A2E] border-b border-white/10 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-[#A0A0B0]">
              <Menu size={20} />
            </button>
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 w-64">
              <Search size={14} className="text-[#A0A0B0]" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white text-sm outline-none w-full placeholder:text-[#A0A0B0]"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-[#A0A0B0] hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#6C63FF] rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#FF6584] flex items-center justify-center text-white text-sm font-bold">
              A
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-8 overflow-auto">

          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
                <p className="text-[#A0A0B0] text-sm mt-1">Welcome back, Admin 👋</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                        <stat.icon size={20} style={{ color: stat.color }} />
                      </div>
                      <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full font-medium">
                        {stat.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-[#A0A0B0] text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Revenue Chart Placeholder */}
              <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <h2 className="text-white font-bold">Revenue Overview</h2>
                  <select className="bg-white/5 border border-white/10 text-[#A0A0B0] text-sm rounded-lg px-3 py-1.5 outline-none">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                  </select>
                </div>
                <div className="flex items-end gap-2 h-40">
                  {[40, 65, 50, 80, 55, 90, 75].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-[#6C63FF] to-[#6C63FF]/40 transition-all duration-500"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[#A0A0B0] text-xs">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <h2 className="text-white font-bold">Recent Orders</h2>
                  <button onClick={() => setActiveTab("orders")} className="text-[#6C63FF] text-sm hover:underline">
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-[#A0A0B0] border-b border-white/10">
                        <th className="text-left pb-3 font-medium">Order ID</th>
                        <th className="text-left pb-3 font-medium">Customer</th>
                        <th className="text-left pb-3 font-medium hidden md:table-cell">Item</th>
                        <th className="text-left pb-3 font-medium">Amount</th>
                        <th className="text-left pb-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-white/2">
                          <td className="py-3 text-[#6C63FF] font-medium">{order.id}</td>
                          <td className="py-3 text-white">{order.customer}</td>
                          <td className="py-3 text-[#A0A0B0] hidden md:table-cell">{order.item}</td>
                          <td className="py-3 text-white font-medium">{order.amount}</td>
                          <td className="py-3">
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[order.status]}`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Courses Tab */}
          {activeTab === "courses" && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
                <h1 className="text-2xl font-bold text-white">Manage Courses</h1>
                <button className="inline-flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors self-start sm:self-auto">
                  <Plus size={16} /> Add Course
                </button>
              </div>
              <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-[#A0A0B0] border-b border-white/10 bg-white/2">
                        <th className="text-left px-6 py-4 font-medium">Course</th>
                        <th className="text-left px-6 py-4 font-medium hidden md:table-cell">Students</th>
                        <th className="text-left px-6 py-4 font-medium hidden md:table-cell">Rating</th>
                        <th className="text-left px-6 py-4 font-medium">Price</th>
                        <th className="text-left px-6 py-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {courses.map((course) => (
                        <tr key={course.id} className="hover:bg-white/2 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img src={course.image} alt={course.title} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                              <div>
                                <div className="text-white font-medium">{course.title}</div>
                                <div className="text-[#A0A0B0] text-xs">{course.level}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-[#A0A0B0] hidden md:table-cell">{course.students.toLocaleString()}</td>
                          <td className="px-6 py-4 text-yellow-400 hidden md:table-cell">★ {course.rating}</td>
                          <td className="px-6 py-4 text-white font-medium">${course.price}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-1.5 text-[#A0A0B0] hover:text-[#6C63FF] transition-colors">
                                <Eye size={16} />
                              </button>
                              <button className="p-1.5 text-[#A0A0B0] hover:text-red-400 transition-colors">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Templates Tab */}
          {activeTab === "templates" && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
                <h1 className="text-2xl font-bold text-white">Manage Templates</h1>
                <button className="inline-flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors self-start sm:self-auto">
                  <Plus size={16} /> Add Template
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <div key={template.id} className="bg-[#1A1A2E] border border-white/10 rounded-2xl overflow-hidden">
                    <img src={template.image} alt={template.title} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold">{template.title}</h3>
                        <span className="text-[#6C63FF] font-bold">${template.price}</span>
                      </div>
                      <p className="text-[#A0A0B0] text-xs mb-4 line-clamp-2">{template.description}</p>
                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-1 text-xs border border-white/10 hover:border-[#6C63FF] text-[#A0A0B0] hover:text-white py-2 rounded-lg transition-colors">
                          <Eye size={13} /> Preview
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-1 text-xs border border-red-500/20 hover:border-red-500/50 text-red-400 py-2 rounded-lg transition-colors">
                          <Trash2 size={13} /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div>
              <h1 className="text-2xl font-bold text-white mb-8">All Orders</h1>
              <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-[#A0A0B0] border-b border-white/10 bg-white/2">
                        <th className="text-left px-6 py-4 font-medium">Order ID</th>
                        <th className="text-left px-6 py-4 font-medium">Customer</th>
                        <th className="text-left px-6 py-4 font-medium hidden md:table-cell">Item</th>
                        <th className="text-left px-6 py-4 font-medium">Amount</th>
                        <th className="text-left px-6 py-4 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-white/2 transition-colors">
                          <td className="px-6 py-4 text-[#6C63FF] font-medium">{order.id}</td>
                          <td className="px-6 py-4 text-white">{order.customer}</td>
                          <td className="px-6 py-4 text-[#A0A0B0] hidden md:table-cell">{order.item}</td>
                          <td className="px-6 py-4 text-white font-medium">{order.amount}</td>
                          <td className="px-6 py-4">
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[order.status]}`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Students Tab */}
          {activeTab === "students" && (
            <div>
              <h1 className="text-2xl font-bold text-white mb-8">Students</h1>
              <div className="grid gap-4">
                {[
                  { name: "Sarah Johnson", email: "sarah@example.com", course: "Complete React Development", joined: "Jan 2025" },
                  { name: "Ahmed Hassan", email: "ahmed@example.com", course: "Next.js Bootcamp", joined: "Feb 2025" },
                  { name: "Priya Sharma", email: "priya@example.com", course: "Modern CSS Mastery", joined: "Mar 2025" },
                  { name: "John Smith", email: "john@example.com", course: "Node & Express API", joined: "Mar 2025" },
                ].map((student, i) => (
                  <div key={i} className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#FF6584] flex items-center justify-center text-white font-bold shrink-0">
                      {student.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold">{student.name}</div>
                      <div className="text-[#A0A0B0] text-sm">{student.email}</div>
                    </div>
                    <div className="hidden md:block text-right">
                      <div className="text-white text-sm">{student.course}</div>
                      <div className="text-[#A0A0B0] text-xs">{student.joined}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
