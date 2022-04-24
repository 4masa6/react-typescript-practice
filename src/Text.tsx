import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// FCは暗黙的にchildrenを受け取れる
// React18から受け取れないように変更になるが、17ではVFCを使うほうが良い
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
