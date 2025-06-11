"use client";
import React, { useRef, useEffect, useState } from "react";

const FollowCursor = ({ color = "#323232a6" }) => {
  const canvasRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkShouldEnable = () => {
      const isMediumUp = window.matchMedia("(min-width: 768px)").matches;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      return isMediumUp && !prefersReducedMotion;
    };

    setEnabled(checkShouldEnable());

    const handleResize = () => {
      setEnabled(checkShouldEnable());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame;
    const cursor = { x: width / 2, y: height / 2 };

    canvas.width = width;
    canvas.height = height;

    const dot = {
      x: width / 2,
      y: height / 2,
      size: 10,
      lag: 10,
      update(x, y) {
        this.x += (x - this.x) / this.lag;
        this.y += (y - this.y) / this.lag;
        context.fillStyle = color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fill();
      },
    };

    const onMouseMove = (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      dot.update(cursor.x, cursor.y);
      animationFrame = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      context.clearRect(0, 0, width, height);
    };
  }, [enabled, color]);

  return enabled ? (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 999,
      }}
    />
  ) : null;
};

export default FollowCursor;
