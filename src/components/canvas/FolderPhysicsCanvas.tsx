"use client";

import React, { useEffect, useRef } from "react";

export default function FolderPhysicsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: FolderParticle[] = [];
    const mouse = { x: -9999, y: -9999, isHovering: false };
    const smoothMouse = { x: -9999, y: -9999 };

    // 1. Offscreen render of High-Resolution macOS Blue Folder Sprite
    const folderCanvas = document.createElement("canvas");
    folderCanvas.width = 64;
    folderCanvas.height = 48;
    const fctx = folderCanvas.getContext("2d");

    function renderFolderIcon() {
      if (!fctx) return;
      fctx.clearRect(0, 0, 64, 48);

      // Soft Ambient Drop Shadow
      fctx.fillStyle = "rgba(0, 0, 0, 0.28)";
      fctx.beginPath();
      fctx.roundRect(4, 10, 56, 36, 6);
      fctx.fill();

      // Folder Tab (Top Left)
      fctx.fillStyle = "#4BA3F5";
      fctx.beginPath();
      fctx.roundRect(5, 3, 24, 12, [5, 5, 0, 0]);
      fctx.fill();

      // Folder Backing Plate
      fctx.fillStyle = "#3B8FE8";
      fctx.beginPath();
      fctx.roundRect(3, 8, 58, 36, 5);
      fctx.fill();

      // Folder Front Flap with Rich Sonoma Blue Gradient
      const grad = fctx.createLinearGradient(0, 14, 0, 44);
      grad.addColorStop(0, "#60A5FA");
      grad.addColorStop(0.35, "#3B82F6");
      grad.addColorStop(1, "#1D4ED8");
      fctx.fillStyle = grad;
      fctx.beginPath();
      fctx.roundRect(3, 14, 58, 30, [4, 4, 5, 5]);
      fctx.fill();

      // Crisp Top Edge Highlight
      fctx.fillStyle = "rgba(255, 255, 255, 0.45)";
      fctx.fillRect(5, 15, 54, 1.5);
    }
    renderFolderIcon();

    // 2. Particle Class with Spring Physics & Cubic Hermite Repulsion
    class FolderParticle {
      originX: number;
      originY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      w: number;
      h: number;
      spring: number;
      friction: number;
      phase: number;
      currentY?: number;

      constructor(tx: number, ty: number, pw: number, ph: number) {
        this.originX = tx;
        this.originY = ty;
        this.x = tx + (Math.random() - 0.5) * 50;
        this.y = ty + (Math.random() - 0.5) * 50;
        this.vx = 0;
        this.vy = 0;
        this.w = pw;
        this.h = ph;
        this.spring = 0.046;
        this.friction = 0.86;
        this.phase = Math.random() * Math.PI * 2;
      }

      update(time: number) {
        // Distance to smooth lerped mouse position
        const dx = smoothMouse.x - this.x;
        const dy = smoothMouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;

        // Smooth non-linear cubic hermite repulsion
        if (dist < maxDist && dist > 0) {
          const norm = 1 - dist / maxDist;
          const smoothForce = (3 * norm * norm - 2 * norm * norm * norm) * 8.5;
          this.vx -= (dx / dist) * smoothForce;
          this.vy -= (dy / dist) * smoothForce;
        }

        // Spring force returning to origin
        const homeDx = this.originX - this.x;
        const homeDy = this.originY - this.y;
        this.vx += homeDx * this.spring;
        this.vy += homeDy * this.spring;

        // Viscous fluid friction
        this.vx *= this.friction;
        this.vy *= this.friction;

        // Speed cap to avoid oscillation
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > 28) {
          this.vx = (this.vx / speed) * 28;
          this.vy = (this.vy / speed) * 28;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Subtle organic breathing float
        const breath = Math.sin(time + this.phase) * 0.45;
        this.currentY = this.y + breath;
      }

      draw(c: CanvasRenderingContext2D) {
        c.drawImage(
          folderCanvas,
          this.x - this.w / 2,
          (this.currentY || this.y) - this.h / 2,
          this.w,
          this.h
        );
      }
    }

    // 3. Authentic Folder Structure Typography Matrix ("Lalit Bisht")
    // Every character is uniformly 3 columns wide for optimal visual balance
    const letters: Record<string, number[][]> = {
      // Uppercase L: 3 cols wide with solid bottom base
      L: [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
      ],
      // Lowercase a: 3 cols wide, centered top arch, distinct legs & crossbar
      a: [
        [0, 0, 0],
        [0, 1, 0],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
      ],
      // Lowercase l: 3 cols wide, centered tall stem with curved right foot hook
      l: [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
      ],
      // Lowercase i: 3 cols wide, centered floating dot, blank gap, stem, and 3-wide serif base
      i: [
        [0, 1, 0],
        [0, 0, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1],
      ],
      // Lowercase t: 3 cols wide with ascender, crossbar, stem, and hook foot
      t: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
      ],
      // Uppercase B: 3 cols wide with double loop
      B: [
        [1, 1, 0],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 1],
        [1, 1, 0],
      ],
      // Lowercase s: 3 cols wide top curve, left shelf, right shelf, bottom bar
      s: [
        [0, 0, 0],
        [1, 1, 1],
        [1, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
      ],
      // Lowercase h: 3 cols wide with tall left ascender, shoulder arch, and two legs
      h: [
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
      ],
    };

    // 4. Dynamic Breakpoint Calculation & Mathematical Sub-pixel Centering
    function initFolderParticles() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = [];
      const cw = rect.width;
      const ch = rect.height;

      const word1 = "Lalit";
      const word2 = "Bisht";

      let cellW: number, cellH: number, pWidth: number, pHeight: number, letterGap: number, wordGap: number;
      const isSingleLine = cw >= 660;

      if (cw >= 1080) {
        // Grand Desktop: High-impact large folders & airy spacing matching reference screenshot
        cellW = 24;
        cellH = 20;
        pWidth = 34;
        pHeight = 26;
        letterGap = 32;
        wordGap = 76;
      } else if (cw >= 920) {
        // Standard Desktop / Laptop
        cellW = 21;
        cellH = 17.5;
        pWidth = 30;
        pHeight = 23;
        letterGap = 26;
        wordGap = 64;
      } else if (cw >= 760) {
        // Medium Desktop
        cellW = 18;
        cellH = 15;
        pWidth = 26;
        pHeight = 20;
        letterGap = 22;
        wordGap = 52;
      } else if (cw >= 660) {
        // Compact Desktop Single Line
        cellW = 15;
        cellH = 13;
        pWidth = 22;
        pHeight = 17;
        letterGap = 18;
        wordGap = 42;
      } else if (cw >= 440) {
        // Tablet / Large Phone: Two stacked lines ("Lalit" line 1, "Bisht" line 2)
        cellW = 20;
        cellH = 17;
        pWidth = 28;
        pHeight = 22;
        letterGap = 22;
        wordGap = 36;
      } else {
        // Compact phone
        cellW = 16;
        cellH = 13.5;
        pWidth = 22;
        pHeight = 18;
        letterGap = 16;
        wordGap = 28;
      }

      function calcWordWidth(word: string) {
        let w = 0;
        for (let i = 0; i < word.length; i++) {
          const matrix = letters[word[i]];
          if (!matrix) continue;
          w += matrix[0].length * cellW;
          if (i < word.length - 1) w += letterGap;
        }
        return w;
      }

      function buildWord(word: string, startX: number, startY: number) {
        let curX = startX;
        for (let i = 0; i < word.length; i++) {
          const char = word[i];
          const matrix = letters[char];
          if (!matrix) continue;
          for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[r].length; c++) {
              if (matrix[r][c] === 1) {
                particles.push(
                  new FolderParticle(curX + c * cellW, startY + r * cellH, pWidth, pHeight)
                );
              }
            }
          }
          curX += matrix[0].length * cellW + letterGap;
        }
      }

      if (isSingleLine) {
        const w1 = calcWordWidth(word1);
        buildWord(word1, 0, (ch - 5 * cellH) / 2);
        buildWord(word2, w1 + wordGap, (ch - 5 * cellH) / 2);

        // Sub-pixel mathematical visual centering across all particles
        if (particles.length > 0) {
          let minX = Infinity, maxX = -Infinity;
          let minY = Infinity, maxY = -Infinity;
          for (const p of particles) {
            const left = p.originX - p.w / 2;
            const right = p.originX + p.w / 2;
            const top = p.originY - p.h / 2;
            const bottom = p.originY + p.h / 2;
            if (left < minX) minX = left;
            if (right > maxX) maxX = right;
            if (top < minY) minY = top;
            if (bottom > maxY) maxY = bottom;
          }
          const shiftX = cw / 2 - (minX + maxX) / 2;
          const shiftY = ch / 2 - (minY + maxY) / 2;
          for (const p of particles) {
            p.originX += shiftX;
            p.x += shiftX;
            p.originY += shiftY;
            p.y += shiftY;
          }
        }
      } else {
        const startY1 = ch / 2 - 5 * cellH - 18;
        const startY2 = ch / 2 + 18;

        buildWord(word1, 0, startY1);
        let minX1 = Infinity, maxX1 = -Infinity;
        for (const p of particles) {
          if (p.originX - p.w / 2 < minX1) minX1 = p.originX - p.w / 2;
          if (p.originX + p.w / 2 > maxX1) maxX1 = p.originX + p.w / 2;
        }
        const shiftX1 = cw / 2 - (minX1 + maxX1) / 2;
        for (const p of particles) {
          p.originX += shiftX1;
          p.x += shiftX1;
        }

        const p2Start = particles.length;
        buildWord(word2, 0, startY2);
        const p2List = particles.slice(p2Start);
        let minX2 = Infinity, maxX2 = -Infinity;
        for (const p of p2List) {
          if (p.originX - p.w / 2 < minX2) minX2 = p.originX - p.w / 2;
          if (p.originX + p.w / 2 > maxX2) maxX2 = p.originX + p.w / 2;
        }
        const shiftX2 = cw / 2 - (minX2 + maxX2) / 2;
        for (const p of p2List) {
          p.originX += shiftX2;
          p.x += shiftX2;
        }
      }
    }

    // 5. Buttery 60fps Animation Loop with Mouse Lerping
    let animTime = 0;
    function animateFolders() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animTime += 0.02;

      // Mouse position smooth lerping
      if (mouse.isHovering) {
        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.25;
        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.25;
      } else {
        smoothMouse.x += (-9999 - smoothMouse.x) * 0.1;
        smoothMouse.y += (-9999 - smoothMouse.y) * 0.1;
      }

      for (const p of particles) {
        p.update(animTime);
        p.draw(ctx);
      }
      animationFrameId = requestAnimationFrame(animateFolders);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
    };

    const handleScatter = () => {
      for (const p of particles) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 18 + Math.random() * 26;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
      }
    };

    window.addEventListener("resize", initFolderParticles);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleScatter);

    initFolderParticles();
    setTimeout(initFolderParticles, 150);
    animateFolders();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", initFolderParticles);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleScatter);
    };
  }, []);

  const triggerScatter = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  };

  return (
    <section
      id="name-canvas-section"
      className="w-full py-12 sm:py-16 flex flex-col justify-center items-center text-center relative z-10 overflow-hidden"
    >
      {/* Divider */}
      <div className="w-[92%] sm:w-[85%] md:w-[65vw] max-w-3xl mx-auto border-t border-zinc-800/80 mb-6 sm:mb-8" />

      {/* Perfectly Centered Canvas Container */}
      <div className="w-full max-w-6xl mx-auto px-4 h-80 sm:h-96 md:h-[440px] flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-pointer"
          title="Wave your cursor through it. Click to scatter."
        />
      </div>

      {/* Prompt & Like Button */}
      <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-5 select-none tracking-wide">
        Wave your cursor through it. Click to scatter.
      </p>

      <button
        onClick={triggerScatter}
        className="mt-4 px-5 py-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-750 text-xs sm:text-sm font-mono text-zinc-300 hover:text-white transition active:scale-95 flex items-center gap-2 shadow-lg hover:border-zinc-500"
      >
        <span className="text-rose-400 text-sm">♡</span>
        <span>Like this site?</span>
      </button>

      {/* Divider */}
      <div className="w-[92%] sm:w-[85%] md:w-[65vw] max-w-3xl mx-auto border-b border-zinc-800/80 mt-6 sm:mb-8" />
    </section>
  );
}
