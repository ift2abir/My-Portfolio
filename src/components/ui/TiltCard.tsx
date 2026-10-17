import React, { useRef, useState, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // In degrees (typically 3-5 deg)
  elevation?: number; // In px (typically -4 to -6 px)
  scale?: number; // Subtle hover scale (e.g. 1.01)
  sheen?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 4,
  elevation = -5,
  scale = 1.01,
  sheen = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [sheenPos, setSheenPos] = useState({ x: 0, y: 0 });
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsTouchOrReduced(isTouch || isReduced);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isTouchOrReduced || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

    setTilt({
      x: -y * maxTilt,
      y: x * maxTilt,
    });

    if (sheen) {
      setSheenPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handlePointerEnter = () => {
    if (isTouchOrReduced) return;
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    if (isTouchOrReduced) return;
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // If touch device or prefers-reduced-motion, render clean static card
  if (isTouchOrReduced) {
    return <div className={`relative ${className}`}>{children}</div>;
  }

  const transformStyle = isHovered
    ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateY(${elevation}px) scale(${scale})`
    : `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)`;

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? 'transform 0.12s ease-out, border-color 0.3s ease, box-shadow 0.3s ease'
          : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* Subtle Restrained Orange Sheen Highlight following cursor */}
      {sheen && isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 380px at ${sheenPos.x}px ${sheenPos.y}px, rgba(255, 77, 22, 0.08), transparent 75%)`,
            zIndex: 10,
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};
