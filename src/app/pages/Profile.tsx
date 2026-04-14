import { motion } from "motion/react";
import { Award, Code2, FolderGit2, Star, Calendar, MapPin, Github, Linkedin, Twitter, Edit } from "lucide-react";

export default function Profile() {
  const userStats = [
    { label: "Projects Joined", value: "8", icon: FolderGit2, color: "from-blue-500 to-cyan-400" },
    { label: "Contribution Points", value: "1,247", icon: Award, color: "from-purple-500 to-pink-400" },
    { label: "Questions Answered", value: "34", icon: Star, color: "from-orange-500 to-yellow-400" },
  ];

  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "TensorFlow",
    "Docker",
    "AWS",
    "MongoDB",
    "GraphQL",
    "Next.js",
    "PostgreSQL",
    "Redis",
  ];

  const projects = [
    {
      id: 1,
      title: "AI Study Buddy",
      role: "Frontend Developer",
      status: "Active",
      contribution: "Built chat interface and integrated OpenAI API",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "Campus Food Delivery App",
      role: "Full Stack Developer",
      status: "Active",
      contribution: "Developed REST API and database schema",
      color: "from-purple-500 to-pink-400",
    },
    {
      id: 3,
      title: "Virtual Study Room",
      role: "Backend Developer",
      status: "Completed",
      contribution: "Implemented WebRTC signaling server",
      color: "from-green-500 to-emerald-400",
    },
  ];

  const achievements = [
    { title: "Early Adopter", description: "Joined during beta launch", icon: "🚀" },
    { title: "Team Player", description: "Joined 5+ projects", icon: "🤝" },
    { title: "Problem Solver", description: "Answered 25+ questions", icon: "💡" },
    { title: "Code Reviewer", description: "Reviewed 50+ pull requests", icon: "👀" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
        >
          <div className="h-32 bg-gradient-to-r from-primary via-purple-600 to-secondary relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
          </div>

          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-16 relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl shadow-xl border-4 border-white"
              >
                SK
              </motion.div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-2">Sarah Kumar</h1>
                    <p className="text-muted-foreground mb-3">Computer Science @ MIT • Class of 2026</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Boston, MA
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Joined January 2025
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </motion.button>
                </div>

                <div className="flex gap-3 mt-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {userStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-2xl mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                Passionate full-stack developer with a focus on building impactful applications. I love working on AI/ML
                projects and exploring new technologies. Always eager to collaborate with fellow developers and learn from the
                community. Currently interested in computer vision and natural language processing.
              </p>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-2xl mb-6">Projects</h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="border border-border rounded-xl p-4 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg mb-1">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.role}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-lg text-xs ${
                          project.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.contribution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="flex items-center gap-2 text-xl mb-4">
                <Code2 className="w-5 h-5 text-primary" />
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.02 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 text-sm border border-primary/20 hover:border-primary hover:shadow-lg transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h2 className="flex items-center gap-2 text-xl mb-4">
                <Award className="w-5 h-5 text-primary" />
                Achievements
              </h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all cursor-pointer"
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <div className="text-sm mb-0.5">{achievement.title}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
