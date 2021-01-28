import styles from "../styles.module.css";

const Code = (p) => <code className={styles.inlineCode} {...p} />;

const figureSpin = () => (
  <div className={styles.container}>
    <figure className={styles.img_circle_0}></figure>
    <figure className={styles.img_circle_1}></figure>
  </div>
);

// `getStaticProps`, and similar Next.js methods like `getStaticPaths` and `getServerSideProps`
// only run in Node.js. Check the terminal to see the environment variables
export async function getStaticProps() {
  // Using the variables below in the browser will return `undefined`. Next.js doesn't
  // expose environment variables unless they start with `NEXT_PUBLIC_`
  console.log("[Node.js only] ENV_VARIABLE:", process.env.ENV_VARIABLE);
  console.log(
    "[Node.js only] ENV_LOCAL_VARIABLE:",
    process.env.ENV_LOCAL_VARIABLE
  );

  return { props: {} };
}

export default figureSpin;
