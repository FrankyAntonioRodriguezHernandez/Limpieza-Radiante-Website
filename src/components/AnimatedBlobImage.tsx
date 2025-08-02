import React from "react";
import { motion, useCycle } from "framer-motion";

type AnimatedBlobImageProps = {
  imageUrl: string;
  alt: string;
  blobPaths: [string, string]; // Only two for a smooth morph
  duration?: number;
};

const AnimatedBlobImage: React.FC<AnimatedBlobImageProps> = ({
  imageUrl,
  alt,
  blobPaths,
  duration = 5,
}) => {
  // Use string keys for Framer Motion variants
  const [current, cycle] = useCycle("0", "1");

  // Framer Motion path morphing variants
  const variants = {
    "0": { d: blobPaths[0] },
    "1": { d: blobPaths[1] },
  };

  // Loop between paths
  React.useEffect(() => {
    const interval = setInterval(() => cycle(), duration * 1000);
    return () => clearInterval(interval);
  }, [cycle, duration]);

  return (
    <div className="w-200 h-96 flex items-center justify-center">
      <svg viewBox="-100 -100 200 200" className="w-full h-full">
        <defs>
          <clipPath id="blobClip">
            <motion.path
              initial="0"
              animate={current}
              variants={variants}
              transition={{
                duration,
                repeat: 0,
                ease: "easeInOut",
              }}
            />
          </clipPath>
        </defs>
        <image
          href={imageUrl}
          width="200"
          height="200"
          x="-100"
          y="-100"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#blobClip)"
        />
      </svg>
    </div>
  );
};

export default AnimatedBlobImage;
