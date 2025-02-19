

import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

// Ball object definition
const createBall = (x, y) => ({
  x,
  y,
  vx: Math.random() * 4 - 2,  // Random horizontal velocity
  vy: Math.random() * 4 - 2,  // Random vertical velocity
  radius: 50,
});

const Ball = () => {
  const [mediaHeight, setMediaHeight] = useState(window.innerHeight);
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth);
  const MAX_H = mediaHeight;
  const MAX_W = mediaWidth;

  // Initial ball positions
  const [balls, setBalls] = useState([
    createBall(50, 100),
    createBall(200, 200),
    createBall(400, 300),
    createBall(400, 400),
    createBall(400, 500),
    createBall(500, 600),
    createBall(500, 700),
    createBall(600, 800),
    createBall(700, 300),
    createBall(800, 100),
    createBall(600, 200),
    createBall(600, 300),
  ]);

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setMediaHeight(window.innerHeight);
      setMediaWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update ball positions using a physics engine
  useEffect(() => {
    const timer = d3.timer(() => {
      setBalls((prevBalls) => {
        const newBalls = prevBalls.map((ball, index) => {
          let newBall = { ...ball };
          newBall.x += newBall.vx;
          newBall.y += newBall.vy;

          // Gravity simulation
          newBall.vy += 0.3;

          // Boundary collision (screen edges)
          if (newBall.x <= 0 || newBall.x >= MAX_W - newBall.radius) {
            newBall.vx = -newBall.vx;
          }
          if (newBall.y <= 0 || newBall.y >= MAX_H - newBall.radius) {
            newBall.vy = -newBall.vy;
          }

          // Collision with other balls
          for (let i = 0; i < prevBalls.length; i++) {
            if (i !== index) {
              const otherBall = prevBalls[i];
              const dx = newBall.x - otherBall.x;
              const dy = newBall.y - otherBall.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              // Simple collision detection (circle collision)
              if (distance < newBall.radius + otherBall.radius) {
                const angle = Math.atan2(dy, dx);
                const speed1 = Math.sqrt(newBall.vx * newBall.vx + newBall.vy * newBall.vy);
                const speed2 = Math.sqrt(otherBall.vx * otherBall.vx + otherBall.vy * otherBall.vy);

                // Bounce balls off each other
                newBall.vx = speed2 * Math.cos(angle);
                newBall.vy = speed2 * Math.sin(angle);
                prevBalls[i].vx = speed1 * Math.cos(angle + Math.PI);
                prevBalls[i].vy = speed1 * Math.sin(angle + Math.PI);
              }
            }
          }

          // Apply stronger friction (drag) to slow down the balls over time
          newBall.vx *= 0.99;  // Increased friction factor for horizontal velocity
          newBall.vy *= 0.99;  // Increased friction factor for vertical velocity

          // Check if ball is close enough to the bottom
          if (newBall.y + newBall.radius >= MAX_H) {
            newBall.y = MAX_H - newBall.radius;  // Correct the position to the bottom
            newBall.vx = 0;  // Stop horizontal velocity
            newBall.vy = 0;  // Stop vertical velocity
          }

          // Check if the ball’s position is stable (hasn’t moved significantly)
          const positionStable = Math.abs(newBall.x - newBall.prevX) < 0.1 && Math.abs(newBall.y - newBall.prevY) < 0.1;
          if (positionStable) {
            newBall.vx = 0;
            newBall.vy = 0;
          }

          // Store current position for future comparison
          newBall.prevX = newBall.x;
          newBall.prevY = newBall.y;

          return newBall;
        });

        // Check if all balls have stopped
        const allStopped = newBalls.every(ball => Math.abs(ball.vx) < 0.05 && Math.abs(ball.vy) < 0.05 && Math.abs(ball.x - ball.prevX) < 0.1 && Math.abs(ball.y - ball.prevY) < 0.1);
        if (allStopped) {
          timer.stop(); // Stop the timer once all balls have stopped
        }

        return newBalls;
      });
    });

    return () => timer.stop();
  }, [MAX_H, MAX_W]);

  return (
    <svg
      width="100%"
      height={MAX_H}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 300,
      }}
    >
      {balls.map((ball, index) => (
        <image
          key={index}
          href={require('../assets/wilson-ball.png')}
          x={ball.x - ball.radius}
          y={ball.y - ball.radius}
          width={ball.radius * 2}
          height={ball.radius * 2}
        />
      ))}
    </svg>
  );
};

export default Ball;

