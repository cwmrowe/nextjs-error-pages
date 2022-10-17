import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from "next";

interface PageProps {}

const Json404: NextPage = () => {
  return <h1>Example 404</h1>;
};

export const getServerSideProps: GetServerSideProps<PageProps> = (context) => {
  const { req, res, resolvedUrl } = context;

  return Promise.resolve({
    notFound: true,
  });
};

export default Json404;
