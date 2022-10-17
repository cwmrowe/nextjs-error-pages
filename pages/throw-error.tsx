import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from "next";

interface PageProps {}

const ThrowError: NextPage = () => {
  return <h1>Throw Error</h1>;
};

export const getServerSideProps: GetServerSideProps<PageProps> = (context) => {
  const { req, res, resolvedUrl } = context;

  console.count('ThrowError getServerSideProps');
  throw Error('My error');

  return Promise.resolve({
    props: {}
  });
};

export default ThrowError;
