import type {
  GetServerSideProps,
  GetServerSidePropsResult,
  NextPage,
} from "next";

interface PageProps {}

const RenderError: NextPage = (props: PageProps) => {
  throw Error('render error');
  return <h1>Return 500</h1>;
};

export const getServerSideProps: GetServerSideProps<PageProps> = (context) => {
  return Promise.resolve({
    props: {}
  });
};

export default RenderError;
