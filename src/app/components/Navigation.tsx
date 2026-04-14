import { Link, useLocation } from "react-router";
import { Code2, Home, FolderGit2, MessageSquare, User } from "lucide-react";
import { motion } from "motion/react";

export function Navigation() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/projects", label: "Projects", icon: FolderGit2 },
    { path: "/discussions", label: "Discussions", icon: MessageSquare },
    { path: "/profile", label: "Profile", icon: User },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center"
            >
              <Code2 className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-display tracking-tight">
              Dev<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Collab</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link key={link.path} to={link.path} className="relative px-4 py-2 rounded-lg transition-colors hover:bg-muted group">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${active ? "text-primary" : "text-muted-foreground"}`} />
                    <span className={active ? "text-foreground" : "text-muted-foreground"}>{link.label}</span>
                  </div>
                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors hidden md:block"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Register
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-around mt-4 pb-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link key={link.path} to={link.path} className="flex flex-col items-center gap-1">
                <Icon className={`w-5 h-5 ${active ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`text-xs ${active ? "text-primary" : "text-muted-foreground"}`}>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
