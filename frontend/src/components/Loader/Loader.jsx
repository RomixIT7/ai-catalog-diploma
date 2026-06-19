import { MagnifyingGlass } from "react-loader-spinner";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="100"
      width="100"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};

export default Loader;
