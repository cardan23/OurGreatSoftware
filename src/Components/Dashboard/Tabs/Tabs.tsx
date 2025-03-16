import React from "react";

// Definimos un tipo para las props
type TabsProps = {
  tabs: { id: "resumen" | "reportes" | "configuracion"; label: string }[];
  activeTab: string;
  setActiveTab: (tab: "resumen" | "reportes" | "configuracion") => void;
};

function Tabs({ tabs, activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex justify-center bg-white shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? "bg-purple-700 text-white"
              : "text-gray-500 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;