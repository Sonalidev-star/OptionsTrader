import StrategyTable from "@/components/StrategyTable";


export default function StrategyBuilderPage() {
  return (
    <main className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Strategy Builder</h1>

      <div className="bg-white p-6 rounded shadow">
        <StrategyTable />
      </div>
    </main>
  );
}
