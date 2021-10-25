import { getSession } from "@lib/auth";

function RedirectPage() {
  return;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session?.user?.id) {
    return { redirect: { permanent: false, destination: "/hi" } };
  }

  return { redirect: { permanent: false, destination: "/hi" } };
}

export default RedirectPage;
