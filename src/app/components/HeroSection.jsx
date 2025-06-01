"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // 3D card hover effect
  const cardVariants = {
    hover: {
      rotateX: 5,
      rotateY: 5,
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  // Particle background effect
  const particleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Text reveal animation
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 75
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.25
      }
    }
  };

  // Button animation
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(139, 69, 255, 0.3)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Glowing orb animation
  const orbVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="lg:py-16 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
          variants={orbVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
          variants={orbVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl"
          variants={orbVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 border border-purple-500/30 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-6 h-6 border-2 border-cyan-500/30 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 relative z-10">
        {/* Text Content */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={mainControls}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          {/* Main heading with stagger effect */}
          <motion.h1 
            className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 inline-block"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello, I&apos;m{" "}
            </motion.span>
            <br />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  "Mukesh",
                  1000,
                  "Web Developer",
                  1000,
                  "MERN Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
              />
            </motion.div>
          </motion.h1>

          {/* Description with slide-in effect */}
          <motion.p 
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I'm passionate about building responsive web apps that solve real-world problems. 
            Let's create something great together.
          </motion.p>

          {/* Animated buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Hire Me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 font-semibold transition-colors duration-300">
                  Download CV
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image Section with 3D effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative"
          >
            {/* Glowing background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-red-500/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main image container with 3D hover effect */}
            <motion.div
              className="rounded-full bg-gradient-to-br from-[#181818] to-[#2a2a2a] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] relative overflow-hidden border-4 border-gradient-to-r from-purple-500/50 to-pink-500/50 shadow-2xl"
              variants={cardVariants}
              whileHover="hover"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Rotating border effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-full h-full rounded-full bg-[#181818]" />
              </motion.div>

              {/* Profile image */}
              <motion.div
                className="absolute inset-2 rounded-full overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  filter: "brightness(1.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/mukesh.jpeg"
                  alt="hero image"
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                  priority
                />
              </motion.div>

              {/* Sparkle effects */}
              <motion.div
                className="absolute top-4 right-8 w-2 h-2 bg-white rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0
                }}
              />
              <motion.div
                className="absolute bottom-8 left-4 w-1 h-1 bg-yellow-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}
              />
              <motion.div
                className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;