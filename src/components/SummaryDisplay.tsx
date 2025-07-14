"use client";

interface SummaryDisplayProps {
  engSummary?: string;
  urduSummary?: string;
  isLoading: boolean;
}

export default function SummaryDisplay({ engSummary, urduSummary, isLoading }: SummaryDisplayProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center my-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }
  
  if (!engSummary && !urduSummary) {
    return null;
  }
  
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {engSummary && (
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="font-bold text-xl mb-3 text-blue-700">English Summary</h3>
          <div className="prose">
            <p className="text-slate-700">{engSummary}</p>
          </div>
        </div>
      )}
      
      {urduSummary && (
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 rtl">
          <h3 className="font-bold text-xl mb-3 text-green-700">اردو خلاصہ</h3>
          <div className="prose">
            <p className="text-slate-700" dir="rtl">{urduSummary}</p>
          </div>
        </div>
      )}
    </div>
  );
}