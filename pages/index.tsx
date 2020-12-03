import Head from "next/head";
import PostsService from "@utils/contentfulPosts";
import Post from "@components/posts/Post";
import { GetServerSideProps } from "next";
import Link from "next/link";
import PageContainer from "@components/template/PageContainer";
import Title from "@components/atoms/Title";
import TransparentHero from "@components/template/hero/TransparentHero";
import Button from "@components/atoms/Button";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin } from "@mdi/js";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Inicio | fmonper</title>
      </Head>

      <TransparentHero>
        <Title size={1} color="text-white" className="my-8">
          Hi, my name is{" "}
          <span className="text-secondary-main">Fernando Montero.</span>
        </Title>
        <Title size={2} color="text-white" className="mb-8">
          I'm a <span className="text-secondary-main">software engineer</span>{" "}
          and <span className="text-secondary-main">full-stack</span> developer.
        </Title>
        <div className="mb-8 flex">
          <Button className="flex mr-4">
            <Icon path={mdiLinkedin} size={1} className="mr-2" /> LinkedIn
          </Button>
          <Button style="link" className="flex">
            <Icon path={mdiGithub} size={1} className="mr-2" /> Github
          </Button>
        </div>
      </TransparentHero>
      <PageContainer>
        <div className="flex justify-center text-center py-8">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            width="64px"
          ></img>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            width="64px"
          ></img>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
            width="64px"
          ></img>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
            width="64px"
          ></img>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            width="64px"
          ></img>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
            width="64px"
          ></img>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
            width="64px"
          ></img>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            width="64px"
          ></img>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
            width="64px"
          ></img>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg"
            width="64px"
          ></img>
        </div>
      </PageContainer>
      <PageContainer>
        <Title size={2} className="mb-4">
          <Link href="/blog">
            <a
              href="/blog"
              className=" text-primary-main hover:text-background-light underline-link"
            >
              From the blog »
            </a>
          </Link>
        </Title>
        <div className="space-y-4">
          {posts.map((entry) => {
            const p = entry.fields;
            return (
              <Post
                entry={entry}
                key={entry.sys.id}
                image={p.image?.fields}
                title={p.title}
              />
            );
          })}
        </div>
      </PageContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await PostsService.fetchEntries();

  return {
    props: {
      posts: res,
    },
  };
};
