import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const ErroringComponet = () => {
  throw Error('Erroring Component');
}

const Home: NextPage = () => {

  const [showErrorComp, setShowErrorComp] = useState(false);

  function showErroringComponent() {
    setShowErrorComp(true);
  }

  function clientSideError() {
    throw Error('Click Error');
  }

  return (
    <ul>
      <li>
        <Link href={"json-404"}>JSON 404</Link>
        <dl>
          <dt>SSR</dt><dd>Doucment with generic 404 content and 404 status (getServerSideProps x 1)</dd>
          <dt>CSR</dt><dd>JSON with notFound true and 404 status. Generic 404 rendered client side. (getServerSideProps x 1)</dd>
        </dl>
      </li>
      <li>
        <Link href={"header-404"}>Header 404</Link>
        <dl>
          <dt>SSR</dt><dd>Doucment with page content and 404 status (getServerSideProps x 1)</dd>
          <dt>CSR</dt><dd>JSON with no content and 404 status. Page reload and then SSR with 404 status. (getServerSideProps x 2)</dd>
        </dl>
      </li>
      <li>
        <Link href={"throw-error"}>Throw Error</Link>
        <dl>
          <dt>SSR</dt><dd>Doucment with static content and 500 status (getServerSideProps x 1)</dd>
          <dt>CSR</dt><dd>JSON with no content and 500 status. Page reload and then SSR generic 500 page with 500 status. (getServerSideProps x 2)</dd>
        </dl>
      </li>
      <li>
        <Link href={"header-500"}>Header 500</Link>
        <dl>
          <dt>SSR</dt><dd>Doucment with custom content and 500 statu (getServerSideProps x 1)</dd>
          <dt>CSR</dt><dd>JSON with no content and 500 status. Page reload and then SSR. (getServerSideProps x 2)</dd>
        </dl>
      </li>
      <li>
        <Link href={"header-500-ssr-only"}>Header 500 SSR only</Link>
        <dl>
          <dt>SSR</dt><dd>Doucment with content and 500 status (getServerSideProps x 1)</dd>
          <dt>CSR</dt><dd>JSON with with content and 200 status. (getServerSideProps x 1)</dd>
        </dl>
        <strong>No 500 error reported in DT for NextJS with CSR</strong>
      </li>
      <li>
        <button type="button" onClick={clientSideError}>Throw error on click</button>
        <p>Error only visible in console.</p>
      </li>
      <li>
        <button type="button" onClick={showErroringComponent}>Error during React render on click</button>
        { showErrorComp && <ErroringComponet/> }
        <p>Application error message is shown.</p>
      </li>
      <li>
        <Link href={"render-error"}>Error during React render on navigation</Link>
        <dl>
          <dt>SSR</dt><dd>Doucment with static content and 500 status (getServerSideProps x 1)</dd>
          <dt>CSR</dt><dd>JSON with with content and 200 status. Application error message is shown. (getServerSideProps x 1)</dd>
        </dl>
      </li>
    </ul>
  );
};

export default Home;
