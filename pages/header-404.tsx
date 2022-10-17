import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from "next";

interface PageProps {}

const Header404: NextPage = () => {
  return <h1>Header 404</h1>;
};

export const getServerSideProps: GetServerSideProps<PageProps> = (context) => {
  const { req, res, resolvedUrl } = context;
  res.statusCode = 404;

  return Promise.resolve({
    props: {
      test: true
    }
  });
};

export default Header404;
