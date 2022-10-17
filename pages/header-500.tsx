import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from "next";

interface PageProps {}

const Return500: NextPage = () => {
  return <h1>Return 500</h1>;
};

export const getServerSideProps: GetServerSideProps<PageProps> = (context) => {
  const { req, res, resolvedUrl } = context;

  res.statusCode = 500;
  
  console.count('Return500 getServerSideProps');

  return Promise.resolve({
    props: {}
  });
};

export default Return500;
