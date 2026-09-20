import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, UserCheck, CalendarDays, BellRing, Menu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface MobileBottomNavProps {
  onOpenMore: () => void;
}

/**
 * Always-visible bottom navigation for mobile.
 * Parents and teachers who aren't comfortable with a hidden hamburger menu
 * can see and tap the main sections directly, the way they would on WhatsApp
 * or a banking app. Large icons + short labels, no nested menus.
 */
export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenMore }) => {
  const { t } = useLanguage();

  const items = [
    { title: t('homeShort'), path: '/', icon: LayoutDashboard },
    { title: t('attendance'), path: '/attendance', icon: UserCheck },
    { title: t('routineShort'), path: '/calendar', icon: CalendarDays },
    { title: t('importantNotices'), path: '/notices', icon: BellRing }
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[var(--bg-card)] border-t border-[var(--border-color)] pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
      aria-label="Main navigation"
    >
      <div className="grid grid-cols-5 h-16">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 text-[11px] font-semibold transition-colors ${
                  isActive
                    ? 'text-sky-600 dark:text-sky-400'
                    : 'text-[var(--text-secondary)]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                  <span className="leading-none text-center px-0.5">{item.title}</span>
                </>
              )}
            </NavLink>
          );
        })}

        <button
          onClick={onOpenMore}
          className="flex flex-col items-center justify-center gap-1 text-[11px] font-semibold text-[var(--text-secondary)]"
          aria-label="More options"
        >
          <Menu className="w-6 h-6" />
          <span className="leading-none">{t('more')}</span>
        </button>
      </div>
    </nav>
  );
};
