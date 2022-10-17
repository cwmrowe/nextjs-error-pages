import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from "next";

interface PageProps {}

const Return500SSROnly: NextPage = () => {
  return <h1>Return 500</h1>;
};

export const getServerSideProps: GetServerSideProps<PageProps> = (context) => {
  const { req, res, resolvedUrl } = context;

  if(req.url!.indexOf('_next/data') < 0) {
    res.statusCode = 500;
  }
  
  console.count('Return500SSROnly getServerSideProps');

  return Promise.resolve({
    props: {}
  });
};

export default Return500SSROnly;
