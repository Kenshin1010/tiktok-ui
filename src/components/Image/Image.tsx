import PropTypes from "prop-types";
import { ForwardedRef, forwardRef, useState } from "react";
import images from "../../assets/images/index";
import styles from "./Image.module.scss";
import classNames from "classnames";

const Image = forwardRef(
  (
    {
      className,
      src,
      alt = "",
      fallback: customFallback = images.noImage,
      ...props
    }: { className?: string; src: string; alt?: string; fallback?: string },
    ref: ForwardedRef<HTMLImageElement>
  ) => {
    const [fallback, setFallback] = useState<string | undefined>();

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
