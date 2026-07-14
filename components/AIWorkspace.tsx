"use client";

import { useEffect, useState, type PointerEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Accent = "red" | "cyan";

interface FlowStep {
  step: number;
  label: string;
  tip: string;
  accent: Accent;
  x: number; // percent, horizontal anchor within the workspace
  y: number; // percent, vertical anchor within the workspace
}

// Edit this list to change the four flow-stage labels, their hover tips, or accent color.
const STEPS: FlowStep[] = [
  { step: 1, label: "Data", tip: "Structured & real-time inputs", accent: "red", x: 12, y: 12 },
  { step: 2, label: "Model", tip: "ML & LLM reasoning", accent: "cyan", x: 86, y: 24 },
  { step: 3, label: "Agent", tip: "Orchestration & tool use", accent: "red", x: 10, y: 66 },
  { step: 4, label: "Decision", tip: "Actionable output", accent: "cyan", x: 82, y: 88 },
];

const FLOW_PATH = `M${STEPS[0].x},${STEPS[0].y} Q48,2 ${STEPS[1].x},${STEPS[1].y} Q42,48 ${STEPS[2].x},${STEPS[2].y} Q52,92 ${STEPS[3].x},${STEPS[3].y}`;

// Turn these down for a calmer feel, up for a more energetic one.
const TILT_DEGREES = 4; // max panel tilt toward the cursor
const CARD_DRIFT_PX = 7; // max floating-card drift toward the cursor
const PULSE_DURATION_S = 9; // seconds for one lap of the data-flow pulse

export default function AIWorkspace() {
  const [reduceMotion, setReduceMotion] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 55, damping: 16, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 55, damping: 16, mass: 0.6 });

  const rotateX = useTransform(springY, [-1, 1], [TILT_DEGREES, -TILT_DEGREES]);
  const rotateY = useTransform(springX, [-1, 1], [-TILT_DEGREES, TILT_DEGREES]);
  const cardX = useTransform(springX, [-1, 1], [-CARD_DRIFT_PX, CARD_DRIFT_PX]);
  const cardY = useTransform(springY, [-1, 1], [-CARD_DRIFT_PX, CARD_DRIFT_PX]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="ai-workspace" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <div className="workspace-glow workspace-glow--red" aria-hidden="true" />
      <div className="workspace-glow workspace-glow--cyan" aria-hidden="true" />

      <svg className="workspace-flow" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path className="workspace-flow-path" d={FLOW_PATH} vectorEffect="non-scaling-stroke" />
        {!reduceMotion && (
          <circle className="workspace-flow-pulse" r="1.4">
            <animateMotion dur={`${PULSE_DURATION_S}s`} repeatCount="indefinite" path={FLOW_PATH} />
          </circle>
        )}
      </svg>

      <motion.div className="workspace-panel" style={{ rotateX, rotateY }}>
        <div className="workspace-panel-edge" aria-hidden="true" />
        <div className="workspace-panel-frame">
          <Image src="/yash-hero-blazer-final.png" alt="Yash Mahajan" width={520} height={520} priority />
        </div>
      </motion.div>

      {STEPS.map((s) => (
        <div key={s.label} className="workspace-card-anchor" style={{ left: `${s.x}%`, top: `${s.y}%` }}>
          <motion.div className={`workspace-card workspace-card--${s.accent}`} style={{ x: cardX, y: cardY }} tabIndex={0}>
            <div className="workspace-card-head">
              <span className="workspace-card-step">{s.step}</span>
              <span className="workspace-card-label">{s.label}</span>
            </div>

            {s.label === "Data" && <span className="workspace-live-dot" aria-hidden="true" />}

            {s.label === "Model" && (
              <div className="workspace-viz" aria-hidden="true">
                <span /><span /><span /><span /><span />
              </div>
            )}

            {s.label === "Agent" && (
              <svg className="workspace-graph" viewBox="0 0 56 24" aria-hidden="true">
                <line x1="4" y1="5" x2="28" y2="19" />
                <line x1="28" y1="19" x2="50" y2="7" />
                <circle cx="4" cy="5" r="2.6" />
                <circle cx="28" cy="19" r="2.6" />
                <circle cx="50" cy="7" r="2.6" />
              </svg>
            )}

            {s.label === "Decision" && <span className="workspace-fragment">{"→ status: ready"}</span>}

            <span className="workspace-card-tip">{s.tip}</span>
          </motion.div>
        </div>
      ))}

      <div className="workspace-mobile-flow">
        <div className="workspace-mobile-track">
          {STEPS.map((s) => (
            <span
              key={`dot-${s.label}`}
              className={`workspace-mobile-dot workspace-mobile-dot--${s.accent}`}
              style={{ left: `${(s.step - 1) * (100 / (STEPS.length - 1))}%` }}
            />
          ))}
          {!reduceMotion && <span className="workspace-mobile-pulse" aria-hidden="true" />}
        </div>
        <div className="workspace-mobile-labels">
          {STEPS.map((s) => (
            <span key={`label-${s.label}`}>{s.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
