import React, {
  useRef,
  useEffect,
  useState,
  ReactNode,
  MutableRefObject,
} from "react";

interface LazyLoadWrapperProps {
  children: ReactNode;
  delay: number;
}

const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({
  children,
  delay,
}) => {
  const blockRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!blockRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }, delay);
        }
      });
    });

    observer.observe(blockRef.current);

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={blockRef}
      className={`lazy-load-block ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default LazyLoadWrapper;
