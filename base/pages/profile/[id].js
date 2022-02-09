import { useEffect } from "react";

const dictionary = {
  fr: {
    hello: "Bonjour",
  },
  en: {
    hello: "Hello",
  }
}

/** http://localhost:3000/profile/<id>
  * http://localhost:3000/profile/1
  * http://localhost:3000/profile/2
  * ...
  */
function Profile({ profile }) {
  useEffect(
    () => {
      // fetch("/api/profile/1")
    },
    [],
  );

  return (
    <div>
    </div>
  );
}

// Called at build time on server-side
export async function getStaticPaths() {
  const profiles = await fetch("/api/profile");

  return {
    paths: profiles.map(({ id }) => ({ params: { id } })),
  };
}

// Called at build time on server-side
export async function getStaticProps() {
  //const response = await fetch("/api/profile");
  const profile = await prisma.profile.findUnique({ ... });

  return {
    props: { profile },
  };
}

// Called when user request the page
export async function getServerSideProps(context) {
  const response = await fetch("/api/profile/" + context.params.id);
  const profile = await response.json();

  return {
    props: { profile },
  };
}

export default Dashboard;
