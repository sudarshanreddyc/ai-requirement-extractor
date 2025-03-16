interface Requirement {
  category: string;
  requirement: string;
}

export default function ExtractedTable({ data }: { data: Requirement[] }) {
  return (
    <div className="mt-6 w-3/4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3 text-left">Category</th>
            <th className="border p-3 text-left">Requirement</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={2} className="border p-3 text-center">
                No data available
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index} className="border">
                <td className="border p-3">{item.category}</td>
                <td className="border p-3">{item.requirement}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
