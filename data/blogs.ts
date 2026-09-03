// data/blogs.ts
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  snippet: string;
  content: string;
}

export const blogs: BlogPost[] = [
  {
    slug: "what-i-learned-from-building-real-projects",
    title: "What I Learned From Building Real Projects as an IT Student",
    date: "Aug 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    snippet: "As an IT student, I have learned many concepts through lectures and practice. However, building real projects is one of the best ways to truly understand what I am learning.",
    content: `As an IT student, I have learned many concepts through lectures, online courses, and practice. However, I realized that building real projects is one of the best ways to truly understand what I am learning.

Working on projects taught me that programming is more than just writing code. It involves planning, solving problems, testing, and continuously improving. I also learned that encountering errors and bugs is a normal part of the development process. Although debugging can sometimes be frustrating, every problem I solve helps me become a better developer.

Building projects also taught me the importance of research and documentation. Developers do not need to know everything. What matters is having the ability to understand a problem, search for information, and find the right solution.

Through developing real projects, I have gained more confidence in my skills and a better understanding of how different technologies work together. Every project has given me the opportunity to learn something new and improve as a developer.

As I continue my journey as an IT student, I know there is still a lot to learn. However, building real projects has shown me that every challenge, mistake, and success is part of becoming a better developer.

For me, every project is not just something to add to my portfolio—it is an opportunity to learn, grow, and prepare for my future career in technology.`
  },
  {
    slug: "my-journey-as-a-bsit-student",
    title: "My Journey as a BSIT Student",
    date: "Jul 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    snippet: "My journey as a BSIT student has been an important part of my path toward building a career in technology, teaching me patience and problem-solving.",
    content: `My journey as a BSIT student has been an important part of my path toward building a career in technology. Throughout the years, I have learned different programming languages, technologies, and concepts that helped me better understand the world of Information Technology.

My journey has not always been easy. There were times when I encountered difficult projects, errors that took hours to solve, and technologies that were challenging to understand. However, these experiences taught me the importance of patience, problem-solving, and continuous learning.

As I progressed through my studies, I became more interested in building real projects and exploring different areas of technology. Working on projects helped me apply what I learned in the classroom and gave me a better understanding of how technology can be used to solve real-world problems.

As a BSIT student, I continue to improve my skills and prepare for the next chapter of my career. I am particularly interested in Artificial Intelligence and look forward to learning more about how it can shape the future of technology.

Although I still have a lot to learn, I believe that every challenge and project is helping me grow as a future IT professional. My journey is still ongoing, and I am excited to continue learning, building, and discovering new opportunities in the world of technology.`
  },
  {
    slug: "ai-harness",
    title: "AI Harness",
    date: "Jun 2026",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    snippet: "As I started learning more about AI, I came across the idea of an AI harness—a system that gives an AI the tools and instructions it needs to perform tasks.",
    content: `As I started learning more about AI, I came across the idea of an AI harness. At first, it sounded complicated, but I learned that it is basically a system that gives an AI the tools and instructions it needs to perform tasks.

An AI model by itself can generate answers, but an AI harness can give it access to things like tools, files, APIs, databases, and other resources. This allows the AI to do more than just chat. It can help complete actual tasks and work as part of a larger system.

What interests me about AI harnesses is how they can be used to build more useful AI applications. Instead of simply asking an AI a question, we can create a workflow where the AI can understand a task, use the right tools, and produce a result.

I am still learning about this area, but I think AI harnesses will become an important part of building AI-powered applications. It is something I want to explore more as I continue learning about Generative AI and automation.`
  },
  {
    slug: "will-ai-replace-programmers",
    title: "Will AI Replace Programmers?",
    date: "May 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    snippet: "AI has become a big part of technology, but as a BSIT student, I view AI as a powerful tool where I remain the brain and director.",
    content: `AI has become a big part of technology, and one question I often hear is: Will AI replace programmers?

As a BSIT student, I don't think programmers will completely disappear. AI can already generate code, find errors, explain concepts, and help build applications. Because of this, some people may think programmers will no longer be needed.

For me, I see AI as a tool. I use AI as a generator, but I am still the one behind the idea. I think of myself as the brain, while AI is the tool that follows my instructions. I tell it what I want to build, how I want it to work, and what I want it to change. I then review the result, test it, and decide whether it actually works.

AI can help me work much faster, but I still need to understand what I am building. I cannot simply copy everything AI generates and expect it to work perfectly. AI can make mistakes, and it is my responsibility to check and improve its output.

I believe the future is not about programmers competing against AI. It is about programmers learning how to use AI effectively.

As a BSIT student, I am not afraid of AI. I want to use it aggressively, learn from it, and make it part of my development process. AI can generate the work, but I provide the ideas, direction, and decisions.`
  }
];