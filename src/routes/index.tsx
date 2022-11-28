import { A } from "solid-start";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoNpm,
} from "solid-icons/io";
import SocialLink from "~/components/SocialLink";

export default function Home() {
  return (
    <div class="min-h-screen max-h-screen overflow-hidden flex flex-col bg-zinc-900 font-sans z-0">
      <main class="flex flex-auto sm:flex-1 p-8 justify-center overflow-y-auto mt-8 z-0">
        <div class="flex xs:flex-col-reverse md:flex-row items-center flex-wrap justify-center">
          <div class="flex flex-initial flex-col">
            <div class="flex flex-auto flex-col">
              <h1 class="text-4xl text-gray-200 font-thin">John Fay</h1>
              <h2 class="text-base text-indigo-100 tracking-widest">
                Software Engineer Manager
              </h2>
              <p class="text-sm text-gray-300">
                Hey there! I'm working remotely from the US
              </p>
              <p class="text-sm text-gray-300">
                I make web applications and build engineering teams
              </p>
              <p class="text-sm text-gray-300">
                Right now I'm really interested in creating with Solid Start,
                Prisma, and GraphQL
              </p>
            </div>
          </div>
          <div class="m-8 sm:my-8 w-48 h-48 rounded-lg shadow-2xl border-sky-800 transition-colors duration-300 hover:border-sky-700 border-4 rotate-45 transform overflow-hidden">
            <div class="w-64  h-64">
              <img
                src={"/img/profile.jpg"}
                alt="Profile"
                class="transform -rotate-45 -translate-x-14 -translate-y-12 cursor-default"
              />
            </div>
          </div>
          <div
            class="py-2 px-2
       flex flex-row flex-grow-1 min-w-full justify-center"
          >
            <SocialLink
              to="https://github.com/keonik"
              label="GitHub"
              durationTime={300}
              icon={<IoLogoGithub size={24} />}
            />
            <SocialLink
              to="https://www.linkedin.com/in/johnkfay"
              label="LinkedIn"
              durationTime={500}
              icon={<IoLogoLinkedin size={24} />}
            />
            <SocialLink
              to="https://twitter.com/dev_so_below"
              label="Twitter"
              durationTime={700}
              icon={<IoLogoTwitter size={24} />}
            />
            <SocialLink
              to="https://www.npmjs.com/~keonik"
              label="NPM"
              durationTime={1000}
              icon={<IoLogoNpm size={24} />}
            />
          </div>
        </div>

        <ul class="transform-norm bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </main>
    </div>
  );
}
