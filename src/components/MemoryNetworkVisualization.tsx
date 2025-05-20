import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

interface MemoryNode {
  id: string;
  group: number;
  label: string;
}

interface MemoryLink {
  source: string;
  target: string;
  value: number;
}

interface MemoryGraphData {
  nodes: MemoryNode[];
  links: MemoryLink[];
}

// Sample data for the memory network visualization
const sampleData: MemoryGraphData = {
  nodes: [
    { id: "mem1", group: 1, label: "Climate Change" },
    { id: "mem2", group: 1, label: "Paris Agreement" },
    { id: "mem3", group: 1, label: "Carbon Emissions" },
    { id: "mem4", group: 2, label: "Renewable Energy" },
    { id: "mem5", group: 2, label: "Solar Power" },
    { id: "mem6", group: 2, label: "Wind Energy" },
    { id: "mem7", group: 3, label: "Policy Impact" },
    { id: "mem8", group: 3, label: "Economic Factors" },
    { id: "mem9", group: 4, label: "Technology Adoption" },
    { id: "mem10", group: 4, label: "Innovation Trends" },
  ],
  links: [
    { source: "mem1", target: "mem2", value: 5 },
    { source: "mem1", target: "mem3", value: 8 },
    { source: "mem2", target: "mem7", value: 4 },
    { source: "mem3", target: "mem4", value: 6 },
    { source: "mem4", target: "mem5", value: 7 },
    { source: "mem4", target: "mem6", value: 7 },
    { source: "mem5", target: "mem9", value: 3 },
    { source: "mem6", target: "mem10", value: 5 },
    { source: "mem7", target: "mem8", value: 6 },
    { source: "mem8", target: "mem10", value: 4 },
    { source: "mem9", target: "mem10", value: 9 },
    { source: "mem2", target: "mem3", value: 5 },
  ]
};

const MemoryNetworkVisualization = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear any existing visualization
    d3.select(svgRef.current).selectAll("*").remove();

    const width = svgRef.current.clientWidth;
    const height = 400;

    // Create the simulation
    const simulation = d3.forceSimulation<d3.SimulationNodeDatum & MemoryNode>()
      .force("link", d3.forceLink<d3.SimulationNodeDatum, d3.SimulationLinkDatum<d3.SimulationNodeDatum>>().id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(30));

    // Create the SVG container
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // Create a group for the visualization
    const g = svg.append("g");

    // Add zoom functionality
    svg.call(
      d3.zoom<SVGSVGElement, unknown>()
        .extent([[0, 0], [width, height]])
        .scaleExtent([0.5, 5])
        .on("zoom", (event) => {
          g.attr("transform", event.transform);
        })
    );

    // Create the links
    const link = g.append("g")
      .selectAll("line")
      .data(sampleData.links)
      .join("line")
      .attr("class", "memory-link")
      .attr("stroke-width", d => Math.sqrt(d.value));

    // Create the nodes
    const node = g.append("g")
      .selectAll("g")
      .data(sampleData.nodes)
      .join("g")
      .call(
        d3.drag<SVGGElement, d3.SimulationNodeDatum>()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    // Add circles for the nodes
    node.append("circle")
      .attr("class", "memory-node")
      .attr("r", 10)
      .attr("fill", d => {
        const colors = ["#4f46e5", "#7c3aed", "#ec4899", "#f59e0b", "#10b981"];
        return colors[(d as MemoryNode).group % colors.length];
      });

    // Add labels to the nodes
    node.append("text")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .text(d => (d as MemoryNode).label)
      .style("font-size", "12px")
      .style("fill", "currentColor");

    // Add tooltips
    node.append("title")
      .text(d => (d as MemoryNode).label);

    // Update positions on each tick of the simulation
    simulation.nodes(sampleData.nodes as (d3.SimulationNodeDatum & MemoryNode)[]);
    (simulation.force("link") as d3.ForceLink<d3.SimulationNodeDatum, d3.SimulationLinkDatum<d3.SimulationNodeDatum>>)
      .links(sampleData.links as d3.SimulationLinkDatum<d3.SimulationNodeDatum>[]);

    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as any).x)
        .attr("y1", d => (d.source as any).y)
        .attr("x2", d => (d.target as any).x)
        .attr("y2", d => (d.target as any).y);

      node
        .attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // Drag functions
    function dragstarted(event: d3.D3DragEvent<SVGGElement, d3.SimulationNodeDatum, d3.SimulationNodeDatum>) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: d3.D3DragEvent<SVGGElement, d3.SimulationNodeDatum, d3.SimulationNodeDatum>) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: d3.D3DragEvent<SVGGElement, d3.SimulationNodeDatum, d3.SimulationNodeDatum>) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Cleanup on unmount
    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <svg ref={svgRef} className="w-full h-full"></svg>
  );
};

export default MemoryNetworkVisualization;
