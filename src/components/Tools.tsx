import React, { useState } from 'react';
import { TOOL_CATEGORIES } from '../data/portfolioData';
import { 
  Wrench, 
  Search, 
  Megaphone, 
  Sparkles, 
  Palette, 
  Cpu, 
  CheckCircle2,
  Filter,
  Check
} from 'lucide-react';

export const Tools: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone': return Megaphone;
      case 'Search': return Search;
      case 'Sparkles': return Sparkles;
      case 'Palette': return Palette;
      case 'Cpu': return Cpu;
      default: return CheckCircle2;
    }
  };

  const filteredCategories = TOOL_CATEGORIES.filter((cat) => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
      return false;
    }
    return true;
  }).map((cat) => {
    if (!searchTerm.trim()) return cat;
    const matchingTools = cat.tools.filter(
      (t) =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, tools: matchingTools };
  }).filter((cat) => cat.tools.length > 0);

  return (
    <section id="tools" className="py-20 bg-[#F8FAFC] border-b border-slate-200" aria-label="Tools and Technology Stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-medium mb-3">
            <Wrench className="w-3.5 h-3.5 text-cyan-700" />
            <span>Operational Stack</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Tools &amp; Modern Technology
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Daily operational toolset spanning performance ad managers, organic measurement engines, generative AI assistants, creative production, and workflow automations.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'All'
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              All Categories
            </button>
            {TOOL_CATEGORIES.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.category
                    ? 'bg-cyan-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search tools or features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 shadow-xs"
            />
          </div>
        </div>

        {/* Categorized Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = getCategoryIcon(category.iconName);
            return (
              <div
                key={category.category}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-100">
                    <div className="p-2 rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-100 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-slate-900">
                        {category.category}
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Tool items inside category */}
                  <div className="space-y-3">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-slate-900 font-heading">
                            {tool.name}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono-code px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shadow-2xs">
                            <Check className="w-2.5 h-2.5 text-emerald-600" />
                            <span>In Daily Use</span>
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                          {tool.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>{category.tools.length} Tools in this discipline</span>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
