import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Users, FileText, Tag, Send } from "lucide-react";
import { useNavigate } from "react-router";

export default function CreateProject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: "",
    teamSize: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project created:", formData);
    navigate("/projects");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-5xl bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent">
              Create New Project
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">Share your idea and find the perfect team to bring it to life</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
        >
          <div className="space-y-8">
            {/* Project Title */}
            <div>
              <label className="flex items-center gap-2 mb-3 text-foreground">
                <FileText className="w-5 h-5 text-primary" />
                <span>Project Title</span>
                <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="e.g., AI-Powered Study Assistant"
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Project Description */}
            <div>
              <label className="flex items-center gap-2 mb-3 text-foreground">
                <FileText className="w-5 h-5 text-primary" />
                <span>Project Description</span>
                <span className="text-destructive">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Describe your project idea, goals, and what you hope to achieve..."
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
              <p className="text-sm text-muted-foreground mt-2">Be specific and clear to attract the right teammates</p>
            </div>

            {/* Required Skills */}
            <div>
              <label className="flex items-center gap-2 mb-3 text-foreground">
                <Tag className="w-5 h-5 text-primary" />
                <span>Required Skills</span>
                <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
                placeholder="e.g., React, Python, TensorFlow, Node.js"
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <p className="text-sm text-muted-foreground mt-2">Separate skills with commas</p>
            </div>

            {/* Team Size */}
            <div>
              <label className="flex items-center gap-2 mb-3 text-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>Team Size</span>
                <span className="text-destructive">*</span>
              </label>
              <input
                type="number"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                required
                min="2"
                max="10"
                placeholder="e.g., 4"
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <p className="text-sm text-muted-foreground mt-2">How many team members do you need? (2-10)</p>
            </div>
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20"
          >
            <h3 className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Pro Tips</span>
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1 ml-7">
              <li>• Be clear about your project's goals and expected outcomes</li>
              <li>• List specific technologies and skills you need</li>
              <li>• Mention any deadlines or time commitments</li>
              <li>• Highlight what makes your project unique and exciting</li>
            </ul>
          </motion.div>

          {/* Submit Button */}
          <div className="mt-8 flex gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/projects")}
              className="px-8 py-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-xl hover:shadow-2xl transition-all"
            >
              <Send className="w-5 h-5" />
              Create Project
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
