import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const outerSkills = [
    "python",
    "javascript",
    "golang",
    "react",
    "nextjs",
    "laravel",
    "odoo",
    "docker",
    "tailwindcss",
    "mysql",
    "mongodb",
    "java",
  ];

  const innerSkills = [
    "github",
    "render",
    "vercel",
    "supabase",
    "postgresql",
    "postman",
    "appinventor",
    "git",
    "vitejs",
    "typescript",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {outerSkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={28} radius={100} reverse speed={2}>
        {innerSkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
