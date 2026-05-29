import React from 'react';

// --- TypeScript Interfaces ---
interface NavItem {
  icon: string;
  label: string;
  isActive?: boolean;
}

interface StatCard {
  title: string;
  value: string;
  icon: string;
  themeClass: string;
  bgClass: string;
  iconBgClass: string;
  isGradient?: boolean;
}

interface Inquiry {
  borrower: string;
  initial: string;
  amount: string;
  propertyType: string;
  status: string;
  statusBg: string;
  statusText: string;
  avatarBg: string;
  avatarText: string;
}

// --- Mock Data ---
const MAIN_NAV_ITEMS: NavItem[] = [
  { icon: 'dashboard', label: 'Overview', isActive: true },
  { icon: 'assignment_late', label: 'Inquiries' },
  { icon: 'view_kanban', label: 'Pipeline' },
  { icon: 'account_balance_wallet', label: 'Portfolio' },
  { icon: 'query_stats', label: 'Analytics' },
];

const FOOTER_NAV_ITEMS: NavItem[] = [
  { icon: 'verified_user', label: 'Security Settings' },
  { icon: 'help_center', label: 'Support' },
];

const STATS_DATA: StatCard[] = [
  {
    title: 'Total Inquiries',
    value: '128',
    icon: 'assignment',
    themeClass: 'text-primary',
    bgClass: 'bg-surface-container-lowest',
    iconBgClass: 'bg-surface-container-low text-on-surface-variant',
  },
  {
    title: 'Active Quotes',
    value: '42',
    icon: 'request_quote',
    themeClass: 'text-secondary',
    bgClass: 'bg-surface-container-lowest',
    iconBgClass: 'bg-surface-container-low text-secondary',
  },
  {
    title: 'Closed Deals',
    value: '15',
    icon: 'handshake',
    themeClass: 'text-tertiary',
    bgClass: 'bg-surface-container-lowest',
    iconBgClass: 'bg-surface-container-low text-tertiary-container',
  },
  {
    title: 'Total Funded',
    value: '$24.5M',
    icon: 'account_balance_wallet',
    themeClass: 'text-primary-fixed',
    bgClass: 'gradient-bg shadow-[0_20px_40px_rgba(0,21,16,0.15)] text-on-primary',
    iconBgClass: 'bg-surface-container-lowest/20 text-on-primary',
    isGradient: true,
  },
];

const RECENT_INQUIRIES: Inquiry[] = [
  {
    borrower: 'Apex Holdings LLC',
    initial: 'A',
    amount: '$4,250,000',
    propertyType: 'Multi-Family',
    status: 'Underwriting',
    statusBg: 'bg-primary-fixed',
    statusText: 'text-on-primary-fixed-variant',
    avatarBg: 'bg-primary-container',
    avatarText: 'text-on-primary-container',
  },
  {
    borrower: 'Orion Development',
    initial: 'O',
    amount: '$1,800,000',
    propertyType: 'Retail Center',
    status: 'Review',
    statusBg: 'bg-secondary-container',
    statusText: 'text-on-secondary-container',
    avatarBg: 'bg-surface-container-high',
    avatarText: 'text-on-surface-variant',
  },
  {
    borrower: 'Vanguard Properties',
    initial: 'V',
    amount: '$8,500,000',
    propertyType: 'Industrial',
    status: 'Funded',
    statusBg: 'bg-tertiary-fixed',
    statusText: 'text-on-tertiary-fixed-variant',
    avatarBg: 'bg-surface-container-high',
    avatarText: 'text-on-surface-variant',
  },
];

export default function LenderDashboard(): React.JSX.Element {
  return (
    <div className="bg-surface-container-low text-on-surface font-body antialiased min-h-screen flex">
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-screen w-72 fixed left-0 top-0 bg-surface-container-low p-6 space-y-8 z-50">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-xl" data-icon="account_balance">
              account_balance
            </span>
          </div>
          <div>
            <h1 className="font-headline text-2xl font-black text-primary tracking-tighter">Stratmire</h1>
            <p className="font-body text-xs text-on-surface-variant uppercase tracking-widest font-semibold mt-0.5">
              Private Vault
            </p>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full py-3 px-4 bg-secondary-container text-on-secondary-container rounded-md font-label font-semibold text-sm flex items-center justify-center space-x-2 hover:bg-secondary transition-colors duration-300 hover:text-on-secondary cursor-pointer">
          <span className="material-symbols-outlined" data-icon="add" style={{ fontVariationSettings: "'FILL' 1" }}>
            add
          </span>
          <span>New Loan Inquiry</span>
        </button>

        {/* Navigation */}
        <div className="flex-1 space-y-1">
          {MAIN_NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-body text-sm font-medium transition-all duration-200 ${
                item.isActive
                  ? 'bg-surface-container-lowest text-secondary shadow-[0_4px_12px_rgba(25,28,29,0.02)]'
                  : 'text-on-surface-variant hover:bg-surface-bright'
              }`}
            >
              <span className="material-symbols-outlined" data-icon={item.icon}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 space-y-1 border-t border-outline-variant/10">
          {FOOTER_NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:bg-surface-bright rounded-xl font-body text-sm font-medium transition-all duration-200"
            >
              <span className="material-symbols-outlined" data-icon={item.icon}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-72 flex flex-col min-h-screen relative">
        {/* TopNavBar */}
        <header className="flex justify-between items-center w-full px-8 h-20 z-40 bg-surface md:bg-transparent sticky top-0">
          <div className="md:hidden">
            <h1 className="font-headline text-xl font-extrabold tracking-tighter text-primary">Stratmire Capital</h1>
          </div>
          <div className="hidden md:block">{/* Search reserved slot */}</div>
          
          <div className="flex items-center space-x-4">
            <button className="text-on-surface-variant hover:text-secondary transition-colors duration-300 relative cursor-pointer">
              <span className="material-symbols-outlined" data-icon="notifications">
                notifications
              </span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full"></span>
            </button>
            <button className="text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer">
              <span className="material-symbols-outlined" data-icon="settings">
                settings
              </span>
            </button>
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-surface-container-lowest shadow-sm ml-2">
              <img
                alt="Chief Investment Officer Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmM5n3KgWhmqw_RpAqywbstv2sI3e5SyWBgc7RWR9V_wzz4a1FvqyjfOhwC52K_JtHRl0W7ItR6TwLvuhwqmQCZlgafkpjXzr7G-8ZbVpCkhsNM6YjuUjVb5aAKfL1hAZNwMHhIqDGQPCA7h9kiIC_-GhXaXZdpr2_9wuaNTdclgl5-deISKhuuWtTVejAJUDXPWw03RyuoTr8_c3YIASzpCsh56kNqlHLtWKncAYtQy6OXVZtTu-M9CtzKhy4aN2GjwvHIS-4MN0"
              />
            </div>
          </div>
        </header>

        {/* Main Canvas */}
        <main className="flex-1 p-8 space-y-10">
          {/* Page Header */}
          <div className="max-w-6xl mx-auto space-y-1">
            <h2 className="font-headline text-4xl font-extrabold text-primary tracking-tight">Lender Dashboard</h2>
            <p className="font-body text-on-surface-variant text-base">Welcome back, Stratmire Partner</p>
          </div>

          {/* Bento Grid: Stats */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS_DATA.map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgClass} rounded-xl p-6 relative overflow-hidden ${
                  !stat.isGradient ? 'group hover:bg-surface-bright transition-colors duration-300 shadow-[0_8px_24px_rgba(25,28,29,0.02)]' : ''
                }`}
              >
                {/* Background styling for Gradient variant */}
                {stat.isGradient && <div className="absolute inset-0 bg-surface-container-lowest/10 backdrop-blur-[2px]"></div>}
                
                {/* Background Icon (Hover effect for standard cards) */}
                {!stat.isGradient && (
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <span className={`material-symbols-outlined text-6xl ${stat.themeClass}`} data-icon={stat.icon}>
                      {stat.icon}
                    </span>
                  </div>
                )}

                <div className="relative z-10 space-y-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.iconBgClass}`}>
                    <span className="material-symbols-outlined" data-icon={stat.icon}>
                      {stat.icon}
                    </span>
                  </div>
                  <div>
                    <p className={`font-label text-sm mb-1 ${stat.isGradient ? 'text-primary-fixed-dim opacity-90' : 'text-on-surface-variant'}`}>
                      {stat.title}
                    </p>
                    <p className={`font-headline text-3xl font-bold ${stat.isGradient ? 'text-on-primary' : 'text-primary'}`}>
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Section: Recent Inquiries */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_8px_32px_rgba(25,28,29,0.03)] overflow-hidden">
              <div className="p-6 bg-surface-container-highest/30 flex justify-between items-center">
                <h3 className="font-headline text-xl font-bold text-primary">Recent Inquiries</h3>
                <button className="text-sm font-label font-medium text-secondary hover:text-primary transition-colors flex items-center space-x-1 cursor-pointer">
                  <span>View All</span>
                  <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant font-label text-xs uppercase tracking-wider">
                      <th className="px-6 py-4 font-medium rounded-tl-lg">Borrower</th>
                      <th className="px-6 py-4 font-medium">Loan Amount</th>
                      <th className="px-6 py-4 font-medium">Property Type</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium text-right rounded-tr-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm divide-y divide-outline-variant/10">
                    {RECENT_INQUIRIES.map((inquiry, idx) => (
                      <tr key={idx} className="hover:bg-surface-bright transition-colors duration-200">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${inquiry.avatarBg} ${inquiry.avatarText}`}
                            >
                              {inquiry.initial}
                            </div>
                            <span className="font-medium text-primary">{inquiry.borrower}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-on-surface-variant">{inquiry.amount}</td>
                        <td className="px-6 py-4 text-on-surface-variant">{inquiry.propertyType}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${inquiry.statusBg} ${inquiry.statusText}`}
                          >
                            {inquiry.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-outline hover:text-secondary transition-colors p-1 cursor-pointer">
                            <span className="material-symbols-outlined" data-icon="more_vert">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}