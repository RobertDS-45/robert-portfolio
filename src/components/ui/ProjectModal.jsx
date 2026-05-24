import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function ProjectModal({ isOpen, project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="card-premium max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-48 overflow-hidden rounded-t-3xl bg-brand-bg">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/20 via-transparent to-transparent" />
              </div>

              {/* Header */}
              <div className="flex items-start justify-between gap-4 p-6 sm:p-8 border-b border-brand-border">
                <div>
                  <p className="eyebrow mb-2">
                    {project.status === "ongoing" ? "Ongoing" : "Completed"}
                  </p>
                  <h3 className="text-2xl font-bold text-brand-secondary">
                    {project.title}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-2 hover:bg-brand-light rounded-lg transition duration-300"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-brand-muted" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Description */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-2">
                    Overview
                  </p>
                  <p className="text-brand-muted leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-3">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress */}
                {project.progress && project.progress.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-3">
                      Progress
                    </p>
                    <ul className="space-y-2">
                      {project.progress.map((item) => (
                        <li key={item} className="text-sm text-brand-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Expected Release */}
                {project.expectedRelease && (
                  <div className="p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary mb-1">
                      Expected Release
                    </p>
                    <p className="text-brand-secondary font-semibold">
                      {project.expectedRelease}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 sm:p-8 border-t border-brand-border">
                <button
                  onClick={onClose}
                  className="w-full px-4 py-2.5 rounded-lg bg-brand-bg text-brand-text border border-brand-border hover:bg-brand-light transition duration-300 text-sm font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
