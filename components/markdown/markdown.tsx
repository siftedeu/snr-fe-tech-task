import ReactMarkdown from "markdown-to-jsx";
import classNames from "classnames";

import styles from "./markdown.module.css";

type MarkdownProps = {
  text: string;
  className?: string;
  options?: {};
};
const Markdown = ({ text, className, options }: MarkdownProps) => {
  const classes = classNames(styles.container, className);
  return (
    <ReactMarkdown
      options={options || { forceBlock: true }}
      className={classes}
    >
      {text}
    </ReactMarkdown>
  );
};

export default Markdown;
