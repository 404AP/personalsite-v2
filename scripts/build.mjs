import { cpSync, copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs";

const outputDirectory = new URL("../dist/", import.meta.url);
const siteDirectory = new URL("../site/", import.meta.url);
const logoSource = new URL("../public/ap.png", import.meta.url);
const resumeSource = new URL("../documents/Alvan-Price-Resume.pdf", import.meta.url);

rmSync(outputDirectory, { recursive: true, force: true });
cpSync(siteDirectory, outputDirectory, { recursive: true });
mkdirSync(new URL("assets/", outputDirectory), { recursive: true });
copyFileSync(logoSource, new URL("assets/ap.png", outputDirectory));

if (!existsSync(resumeSource)) {
  throw new Error("Missing documents/Alvan-Price-Resume.pdf. Generate the resume before building.");
}

copyFileSync(resumeSource, new URL("Alvan-Price-Resume.pdf", outputDirectory));

console.log("DigitalOcean-ready site built in dist/");
