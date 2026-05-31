import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: "default"
})

const cleanMermaidChart = (diagram) => {
  if (!diagram) return "";

  let clean = diagram
    .replace(/\r?\n/g, "\n")
    .trim();

  if (!clean.startsWith("graph") && !clean.startsWith("flowchart")) {
    clean = `graph TD\n${clean}`;
  }

  clean = clean.replace(
    /(\w+)\[([^\]]*\([^\)]*\)[^\]]*)\]/g,
    (match, id, label) => `${id}["${label}"]`
  );

  clean = clean.replace(
    /(\w+)\(([^)]*\([^)]*\)[^)]*)\)/g,
    (match, id, label) => `${id}("${label}")`
  );

  return clean;
};


const MermaidSetup = ({ diagram }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!diagram || !containerRef.current) return;

    const renderDiagram = async () => {
      try {
        containerRef.current.innerHTML = "";

        const uniqueId = `mermaid-${Math.random()
          .toString(36)
          .substring(2, 9)}`;

        const safeChart = cleanMermaidChart(diagram);

        const { svg } = await mermaid.render(uniqueId, safeChart);
        containerRef.current.innerHTML = svg;
      } catch (error) {
        console.error("Mermaid render failed:", error);
        containerRef.current.innerHTML = `<pre style="color:red">Diagram error: ${error.message}</pre>`;
      }
    };

    renderDiagram();
  }, [diagram]);

  return (
    <div className='bg-white border rounded-lg p-4 overflow-x-auto'>
      <div ref={containerRef} />
    </div>
  )
}

export default MermaidSetup