import { useState } from "react";
import { motion } from "motion/react";
import { Search, Filter, Users, Clock, ArrowRight } from "lucide-react";

const mockProjects = [
  {
    id: 1,
    title: "AI Study Buddy",
    description: "An intelligent chatbot that helps students with homework and exam prep using GPT-4",
    skills: ["Python", "React", "OpenAI", "FastAPI"],
    teamSize: 4,
    members: 2,
    timePosted: "2 days ago",
  },
  {
    id: 2,
    title: "Campus Food Delivery App",
    description: "Mobile app connecting students with local restaurants for quick campus delivery",
    skills: ["React Native", "Node.js", "MongoDB", "Express"],
    teamSize: 5,
    members: 3,
    timePosted: "1 week ago",
  },
  {
    id: 3,
    title: "Code Snippet Manager",
    description: "VS Code extension to save, organize, and share code snippets across teams",
    skills: ["TypeScript", "VS Code API", "Firebase"],
    teamSize: 3,
    members: 1,
    timePosted: "3 days ago",
  },
  {
    id: 4,
    title: "Virtual Study Room",
    description: "Real-time collaboration platform with video, whiteboard, and code sharing",
    skills: ["WebRTC", "Socket.io", "React", "Node.js"],
    teamSize: 6,
    members: 4,
    timePosted: "5 days ago",
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting system for student organizations using smart contracts",
    skills: ["Solidity", "Ethereum", "Web3.js", "React"],
    teamSize: 4,
    members: 2,
    timePosted: "1 day ago",
  },
  {
    id: 6,
    title: "Mental Health Tracker",
    description: "Mobile app for tracking mood, journaling, and connecting with campus counseling",
    skills: ["Flutter", "Dart", "Firebase", "TensorFlow"],
    teamSize: 5,
    members: 3,
    timePosted: "4 days ago",
  },
];

const skillColors = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-orange-500 to-yellow-400",
  "from-green-500 to-emerald-400",
  "from-red-500 to-rose-400",
  "from-indigo-500 to-purple-400",
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const allSkills = Array.from(new Set(mockProjects.flatMap((p) => p.skills)));

  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSkill = !selectedSkill || project.skills.includes(selectedSkill);
    return matchesSearch && matchesSkill;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl mb-4 bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent">
            Explore Projects
          </h1>
          <p className="text-xl text-muted-foreground">Find the perfect project to join and start collaborating</p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            <button
              onClick={() => setSelectedSkill(null)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                !selectedSkill
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All Skills
            </button>
            {allSkills.slice(0, 8).map((skill, index) => (
              <button
                key={skill}
                onClick={() => setSelectedSkill(skill)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  selectedSkill === skill
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -z-0" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl flex-1 pr-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">{project.timePosted}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-lg text-xs bg-gradient-to-r ${
                        skillColors[idx % skillColors.length]
                      } text-white shadow-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>
                      {project.members}/{project.teamSize} members
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm shadow-lg hover:shadow-xl transition-all"
                  >
                    Join
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
