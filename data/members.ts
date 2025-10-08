// data/members.ts
export type Member = {
  name: string;
  title?: string;
  linkedin: string; // e.g. https://www.linkedin.com/in/your-id/
  avatar?: string;  // e.g. /avatars/anni.png
  skills: string[]; // skillsets
  focus: string[];  // project-specific focus areas
};

export const MEMBERS: Member[] = [
  {
    name: "An-Ni Huang",
    title: "Project Manager / AI Specialist",
    linkedin: "https://www.linkedin.com/in/an-ni-huang-993071325/",
    avatar: "/avatars/anni.png",
    skills: ["Python", "PyTorch", "ONNX", "Project Planning", "Coordination"],
    focus: [
      "Defining AI-first pipeline design",
      "Managing sprint progress",
      "Leading model training and evaluation",
    ],
  },
  {
    name: "Chen Li",
    title: "Backend Developer (Cloud & Data)",
    linkedin: "https://www.linkedin.com/in/chen-li-sd2023/",
    //avatar: "/avatars/chen.png",
    skills: [
      "Supabase Integration",
      "Cloud Infrastructure",
      "Docker Environment Setup",
      "Dataset Management",
    ],
    focus: [
      "Setting up Supabase backend",
      "Configuring deployment environments",
      "Managing datasets and cloud storage",
      "Supporting backend service integration",
    ],
  },
  {
    name: "Himanshi Punj",
    title: "Backend Developer (Scripts & Processing)",
    linkedin: "https://www.linkedin.com/in/himanshipunj/",
    //avatar: "/avatars/himanshi.png",
    skills: [
      "Python Scripting",
      "Image Preprocessing",
      "FastAPI Basics",
      "Testing Frameworks",
      "Backend Utility Development",
    ],
    focus: [
      "Writing data processing scripts",
      "Assisting with backend features",
      "Supporting model pipeline integration",
      "Contributing to infrastructure tasks",
    ],
  },
  {
    name: "Daisy Di",
    title: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/daisy-di0507/",
    //avatar: "/avatars/daisy.png",
    skills: ["React Native", "Expo", "Mobile UI Integration", "Component-based Design"],
    focus: [
      "Building mobile app UI",
      "Connecting frontend with backend APIs",
      "Ensuring smooth and consistent user interactions",
    ],
  },
];
