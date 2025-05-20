import { useState } from 'react'
import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Button } from "./components/ui/button"

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700 bg-white/75 dark:bg-slate-900/75 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">AM</span>
            </div>
            <h1 className="text-xl font-bold">Agentic Memory</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Button variant="link" onClick={() => setActiveSection('home')}>Home</Button>
            <Button variant="link" onClick={() => setActiveSection('foundations')}>Foundations</Button>
            <Button variant="link" onClick={() => setActiveSection('technical')}>Technical</Button>
            <Button variant="link" onClick={() => setActiveSection('comparison')}>Comparison</Button>
            <Button variant="link" onClick={() => setActiveSection('future')}>Future</Button>
            <Button variant="link" onClick={() => setActiveSection('resources')}>Resources</Button>
          </nav>
          <Button variant="outline" className="md:hidden">Menu</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Agentic Memory for LLM Agents
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Exploring the evolution, implementation, and future of memory systems for Large Language Models
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">What is Agentic Memory?</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Memory systems that enable LLM agents to dynamically organize and evolve their knowledge over time.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Why is it Important?</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Enables stateless LLMs to maintain context, learn from experiences, and perform complex reasoning tasks.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Current Research</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Cutting-edge approaches like A-MEM are revolutionizing how agents store and utilize information.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md mb-12">
              <h2 className="text-2xl font-bold mb-4">Interactive Memory Visualization</h2>
              <div className="aspect-video bg-slate-100 dark:bg-slate-700 rounded-md flex items-center justify-center">
                <p className="text-slate-500 dark:text-slate-400">Interactive visualization will appear here</p>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                This interactive visualization demonstrates how memories are connected and evolve in an agentic memory system.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Key Research Papers</h2>
              <ul className="space-y-4">
                <li className="p-4 border border-slate-200 dark:border-slate-700 rounded-md">
                  <h3 className="font-bold">A-MEM: Agentic Memory for LLM Agents</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Wujiang Xu, Kai Mei, et al. (2025)</p>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    Introduces a novel agentic memory system inspired by the Zettelkasten method.
                  </p>
                </li>
                <li className="p-4 border border-slate-200 dark:border-slate-700 rounded-md">
                  <h3 className="font-bold">Emergent and Predictable Memorization in Large Language Models</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Stella Biderman, et al. (2023)</p>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    Explores how memory emerges in large language models.
                  </p>
                </li>
                <li className="p-4 border border-slate-200 dark:border-slate-700 rounded-md">
                  <h3 className="font-bold">Learning to Reason and Memorize with Self-Notes</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Jack Lanchantin, et al. (2023)</p>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    Presents a self-note approach to memory and reasoning.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeSection === 'foundations' && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Foundations of Agentic Memory</h1>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">What is Agentic Memory?</h2>
              <p className="mb-4 text-slate-600 dark:text-slate-300">
                Agentic memory refers to memory systems designed for Large Language Model (LLM) agents that can dynamically organize and evolve memories over time. Unlike traditional memory systems that offer basic storage and retrieval, agentic memory creates interconnected knowledge networks through dynamic indexing and linking.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                These systems enable LLM agents to maintain contextual relevance over time, adapt to new information, and perform complex reasoning tasks that require integration of historical experiences.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">Historical Context</h2>
              <div className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                <div className="space-y-8 relative">
                  <div className="ml-10 relative">
                    <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-blue-500"></div>
                    <h3 className="font-bold">2020-2021: Early LLM Memory Challenges</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Initial LLM agents struggled with maintaining context over long interactions, leading to research on external memory systems.
                    </p>
                  </div>
                  <div className="ml-10 relative">
                    <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-blue-500"></div>
                    <h3 className="font-bold">2022-2023: Basic Memory Systems</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Introduction of simple vector databases and retrieval mechanisms to extend LLM context.
                    </p>
                  </div>
                  <div className="ml-10 relative">
                    <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-blue-500"></div>
                    <h3 className="font-bold">2023-2024: Graph-Based Memory</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Incorporation of graph databases to represent relationships between memories.
                    </p>
                  </div>
                  <div className="ml-10 relative">
                    <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-purple-500"></div>
                    <h3 className="font-bold">2025: A-MEM and Dynamic Memory</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Introduction of A-MEM and similar systems that enable dynamic, evolving memory structures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">The Zettelkasten Method</h2>
              <p className="mb-4 text-slate-600 dark:text-slate-300">
                Many modern agentic memory systems, including A-MEM, draw inspiration from the Zettelkasten method, a note-taking and knowledge management system developed by German sociologist Niklas Luhmann.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-md">
                  <h3 className="font-bold mb-2">Key Principles</h3>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                    <li>Atomic notes (one idea per note)</li>
                    <li>Unique identifiers for each note</li>
                    <li>Explicit connections between notes</li>
                    <li>Emergent structure rather than predefined categories</li>
                  </ul>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-md">
                  <h3 className="font-bold mb-2">Application to LLMs</h3>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                    <li>Structured memory notes with metadata</li>
                    <li>Dynamic linking between related memories</li>
                    <li>Evolving contextual representations</li>
                    <li>Network-based knowledge organization</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                This method enables the creation of a "second brain" that can discover connections between ideas and evolve over time, much like how modern agentic memory systems aim to function.
              </p>
            </div>
          </div>
        )}

        {activeSection === 'technical' && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Technical Deep Dive</h1>
            
            <Tabs defaultValue="architectures" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="architectures">Architectures</TabsTrigger>
                <TabsTrigger value="implementation">Implementation</TabsTrigger>
                <TabsTrigger value="integration">LLM Integration</TabsTrigger>
              </TabsList>
              <TabsContent value="architectures" className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Memory Architectures</h2>
                <div className="space-y-6">
                  <div className="border border-slate-200 dark:border-slate-700 rounded-md p-4">
                    <h3 className="font-bold text-xl mb-2">A-MEM Architecture</h3>
                    <p className="mb-3 text-slate-600 dark:text-slate-300">
                      A-MEM implements a dynamic, interconnected memory network inspired by the Zettelkasten method.
                    </p>
                    <div className="aspect-video bg-slate-100 dark:bg-slate-700 rounded-md flex items-center justify-center mb-3">
                      <p className="text-slate-500 dark:text-slate-400">A-MEM architecture diagram</p>
                    </div>
                    <h4 className="font-semibold mb-2">Key Components:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                      <li>Structured memory notes with rich metadata</li>
                      <li>Dynamic link generation between related memories</li>
                      <li>Memory evolution mechanism</li>
                      <li>Context-aware retrieval system</li>
                    </ul>
                  </div>
                  
                  <div className="border border-slate-200 dark:border-slate-700 rounded-md p-4">
                    <h3 className="font-bold text-xl mb-2">Traditional Memory Systems</h3>
                    <p className="mb-3 text-slate-600 dark:text-slate-300">
                      Conventional approaches use simpler storage and retrieval mechanisms without dynamic organization.
                    </p>
                    <div className="aspect-video bg-slate-100 dark:bg-slate-700 rounded-md flex items-center justify-center mb-3">
                      <p className="text-slate-500 dark:text-slate-400">Traditional memory architecture diagram</p>
                    </div>
                    <h4 className="font-semibold mb-2">Key Components:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                      <li>Basic key-value storage</li>
                      <li>Vector embeddings for similarity search</li>
                      <li>Fixed categorization schemes</li>
                      <li>Limited or no evolution capabilities</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="implementation" className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Implementation Details</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Note Construction</h3>
                    <p className="mb-3 text-slate-600 dark:text-slate-300">
                      The process of creating structured memory notes with multiple components.
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-md font-mono text-sm mb-3 overflow-x-auto">
                      {`{
  "content": "User asked about climate change impacts",
  "timestamp": "2025-05-20T10:30:00Z",
  "keywords": ["climate change", "impacts", "environment"],
  "tags": ["science", "environment", "user_query"],
  "context": "Discussion about environmental impacts of climate change",
  "embedding": [0.1, 0.2, 0.3, ...],
  "links": ["mem_id_123", "mem_id_456"]
}`}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      This structured format enables rich semantic understanding and efficient retrieval.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-xl mb-2">Link Generation</h3>
                    <p className="mb-3 text-slate-600 dark:text-slate-300">
                      The process of establishing connections between related memory notes.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                      <li>Calculate similarity scores between the new memory and existing memories</li>
                      <li>Retrieve top-k most similar memories as candidates</li>
                      <li>Use LLM to analyze semantic relationships between candidates and new memory</li>
                      <li>Establish bidirectional links between meaningfully related memories</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-xl mb-2">Memory Evolution</h3>
                    <p className="mb-3 text-slate-600 dark:text-slate-300">
                      The process of updating existing memories based on new information.
                    </p>
                    <div className="aspect-video bg-slate-100 dark:bg-slate-700 rounded-md flex items-center justify-center mb-3">
                      <p className="text-slate-500 dark:text-slate-400">Memory evolution diagram</p>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      This continuous refinement allows the memory network to adapt and improve its understanding over time.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="integration" className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Integration with Stateless LLMs</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Memory-Augmented Prompting</h3>
                    <p className="mb-3 text-slate-600 dark:text-slate-300">
                      Techniques for incorporating memory information into LLM prompts.
                    </p>
                    <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-md font-mono text-sm mb-3 overflow-x-auto">
                      {`System: You are an assistant with access to memory.
Relevant memories:
1. [2025-05-18] User mentioned they have a dog named Max
2. [2025-05-19] User said they live in Seattle
3. [2025-05-20] User discussed their interest in hiking

User: What activities might I enjoy this weekend?`}
