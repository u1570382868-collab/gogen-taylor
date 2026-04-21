export default function SpecTable({ specs = [], columns = 1 }) {
  if (!specs.length) return null;

  return (
    <div className="overflow-hidden rounded-sm border border-ink-100">
      <table className="w-full border-collapse">
        <tbody>
          {specs.map((spec, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? 'bg-white' : 'bg-ink-50'}
            >
              <td className="w-1/2 py-3 px-4 text-body-sm font-medium text-ink-500 align-top">
                {spec.label}
              </td>
              <td className="py-3 px-4 text-mono-md font-mono text-ink-800 tabular-nums">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
