import { useState } from "react";
import { motion } from "motion/react";
import { MessageSquare, ThumbsUp, MessageCircle, Search, TrendingUp, Clock } from "lucide-react";

const mockDiscussions = [
  {
    id: 1,
    title: "How to implement OAuth2 authentication in a React app?",
    description: "I'm building a web app and need to add Google login. What's the best approach?",
    author: "Alex Kumar",
    timePosted: "2 hours ago",
    replies: 12,
    likes: 24,
    tags: ["React", "Authentication", "OAuth2"],
    trending: true,
  },
  {
    id: 2,
    title: "Best practices for API error handling in Node.js",
    description: "Looking for advice on structuring error responses and handling edge cases",
    author: "Maria Garcia",
    timePosted: "5 hours ago",
    replies: 8,
    likes: 15,
    tags: ["Node.js", "Backend", "API"],
    trending: false,
  },
  {
    id: 3,
    title: "Help with React state management - Context vs Redux",
    description: "My app is getting complex. Should I stick with Context API or migrate to Redux?",
    author: "James Wilson",
    timePosted: "1 day ago",
    replies: 23,
    likes: 45,
    tags: ["React", "State Management", "Redux"],
    trending: true,
  },
  {
    id: 4,
    title: "Optimizing database queries for large datasets",
    description: "My PostgreSQL queries are slow with 1M+ rows. Any indexing tips?",
    author: "Priya Sharma",
    timePosted: "1 day ago",
    replies: 16,
    likes: 32,
    tags: ["PostgreSQL", "Database", "Performance"],
    trending: false,
  },
  {
    id: 5,
    title: "CSS Grid vs Flexbox - When to use which?",
    description: "I always get confused about when to use Grid vs Flexbox for layouts",
    author: "Carlos Rodriguez",
    timePosted: "2 days ago",
    replies: 19,
    likes: 38,
    tags: ["CSS", "Layout", "Frontend"],
    trending: false,
  },
  {
    id: 6,
    title: "Docker containerization for microservices - beginner guide?",
    description: "Starting with Docker for my microservices project. Where should I begin?",
    author: "Emily Chen",
    timePosted: "3 days ago",
    replies: 14,
    likes: 27,
    tags: ["Docker", "DevOps", "Microservices"],
    trending: true,
  },
];

const tagColors = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-orange-500 to-yellow-400",
  "from-green-500 to-emerald-400",
  "from-red-500 to-rose-400",
];

export default function Discussions() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDiscussions = mockDiscussions.filter(
    (discussion) =>
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
            Discussions & Doubts
          </h1>
          <p className="text-xl text-muted-foreground">Ask questions, share knowledge, and help fellow developers</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                >
                  Ask Question
                </motion.button>
              </div>
            </motion.div>

            {/* Discussions List */}
            <div className="space-y-4">
              {filteredDiscussions.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                >
                  {discussion.trending && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs shadow-lg">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0">
                      {discussion.author.split(" ").map((n) => n[0]).join("")}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">{discussion.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{discussion.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {discussion.tags.map((tag, idx) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-lg text-xs bg-gradient-to-r ${
                              tagColors[idx % tagColors.length]
                            } text-white shadow-sm`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <span>{discussion.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{discussion.timePosted}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{discussion.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{discussion.replies} replies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredDiscussions.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-2xl mb-2">No discussions found</h3>
                <p className="text-muted-foreground">Try a different search term</p>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg sticky top-24"
            >
              <h3 className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                Trending Topics
              </h3>
              <div className="space-y-3">
                {["React Hooks", "API Design", "Docker", "TypeScript", "Database Optimization"].map((topic, index) => (
                  <motion.button
                    key={topic}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all border border-transparent hover:border-primary/20"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{topic}</span>
                      <span className="text-xs text-muted-foreground">{Math.floor(Math.random() * 50) + 10}+</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-br from-primary via-purple-600 to-secondary rounded-2xl p-6 shadow-lg text-white"
            >
              <h3 className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5" />
                Community Stats
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl mb-1">2,847</div>
                  <div className="text-sm opacity-90">Questions Asked</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">12,341</div>
                  <div className="text-sm opacity-90">Answers Given</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">95%</div>
                  <div className="text-sm opacity-90">Questions Resolved</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
