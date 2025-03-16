import { useState } from "react";

export default function useCredits(initialCredits: number) {
  const [credits, setCredits] = useState(initialCredits);

  const useCredit = () => {
    if (credits > 0) setCredits(credits - 1);
  };

  return { credits, useCredit };
}
