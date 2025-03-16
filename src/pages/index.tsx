import ExtractedTable from "@/components/ExtractedTable";
import RequirementInput from "@/components/RequirementInput";
import useCredits from "@/hooks/useCredits";
import { useState, useCallback } from "react";

export default function Home() {
  const { credits, useCredit } = useCredits(20);
  const [extractedData, setExtractedData] = useState<
    { category: string; requirement: string }[]
  >([]);

  // ✅ Wrap in useCallback to follow React Hook rules
  const handleExtract = useCallback(
    async (text: string) => {
      if (credits <= 0) {
        alert(
          "You've reached the maximum credit limit. Please purchase more credits."
        );
        return;
      }

      //useCredit(); // ✅ Now properly inside a React hook

      try {
        const response = await fetch("/api/extract", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });

        if (!response.ok) {
          throw new Error(`Server Error: ${response.statusText}`);
        }

        const data = await response.json();
        setExtractedData([
          { category: "Extracted Text", requirement: data.extractedData },
        ]);
      } catch (error) {
        console.error("Fetch Error:", error);
        alert("Error extracting requirements. Please try again.");
      }
    },
    [credits, useCredit]
  ); // ✅ Dependencies added for correctness

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">AI-Powered Requirement Extractor</h1>
      <p className="mt-2">
        Credits Remaining: <strong>{credits}</strong>
      </p>

      <RequirementInput onExtract={handleExtract} />
      {extractedData.length > 0 && <ExtractedTable data={extractedData} />}
    </div>
  );
}
