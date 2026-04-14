import { Link } from "react-router";
import { motion } from "motion/react";
import { Code2, Users, MessageCircle, BookOpen, Sparkles, Zap, Target } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Find Teammates",
      description: "Connect with students who share your passion and complement your skills",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Code2,
      title: "Debug Code Together",
      description: "Collaborate in real-time and solve problems faster with peer support",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: BookOpen,
      title: "Share Knowledge",
      description: "Learn from others and contribute your expertise to the community",
      color: "from-orange-500 to-yellow-400",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CS Student, MIT",
      content: "DevCollab helped me find amazing teammates for my ML project. We built something incredible together!",
      avatar: "SC",
    },
    {
      name: "Marcus Johnson",
      role: "Software Engineering, Stanford",
      content: "The debugging discussions saved me hours of frustration. The community here is incredibly supportive.",
      avatar: "MJ",
    },
    {
      name: "Priya Sharma",
      role: "Computer Science, Berkeley",
      content: "I've learned more through DevCollab projects than in some of my courses. Real collaboration is key!",
      avatar: "PS",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl -z-10" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm">Join 10,000+ student developers</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent leading-tight"
          >
            Build Projects Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed"
          >
            The platform where engineering students collaborate, debug, and grow together.
            <br />
            <span className="text-foreground">Turn your ideas into reality with the perfect team.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/create-project">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-lg shadow-xl shadow-primary/30 hover:shadow-2xl transition-all group"
              >
                <span className="flex items-center gap-2">
                  Create Project
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </motion.button>
            </Link>
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white text-foreground text-lg border-2 border-border hover:border-primary transition-all shadow-lg"
              >
                <span className="flex items-center gap-2">
                  Explore Projects
                  <Target className="w-5 h-5" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Why DevCollab?</h2>
          <p className="text-xl text-muted-foreground">Everything you need to build amazing projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Loved by Students</h2>
          <p className="text-xl text-muted-foreground">See what our community has to say</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-display">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary via-purple-600 to-secondary rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl mb-6">Ready to Start Building?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of students creating amazing projects together</p>
            <Link to="/create-project">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-xl bg-white text-primary text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Get Started Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
