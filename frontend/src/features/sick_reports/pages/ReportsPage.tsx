import { useEffect, useState } from "react";
import { listReports } from "../api/queries.js";
import type { SickReport } from "../utils/types.js";
import { formatDate } from "../utils/format.js";
import ReportForm from "../components/ReportForm.js";

export default function ReportsPage() {
  const [items, setItems] = useState<SickReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await listReports();
        setItems(data);
      } catch (e: any) {
        setErr(e?.message ?? "Failed to load");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: 16, fontFamily: "Inter, system-ui, sans-serif" }}>
              <h1 style={{ margin: 0, fontSize: 28 }}>Registrera ny sjukanmälan</h1>

      <p></p>

      {/* Formulär */}
      <ReportForm onCreated={(r) => setItems((prev) => [r, ...prev])} />

      {loading && <div>Loading…</div>}
      {err && <div style={{ color: "crimson" }}>Error: {err}</div>}

      {!loading && !err && (
        <div style={{ overflowX: "auto" }}>
            <p></p>
        <h1 style={{ margin: 0, fontSize: 28 }}>Sjukanmälningar</h1>
        <p></p>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
                <th style={{ padding: "10px 8px" }}>ID</th>
                <th style={{ padding: "10px 8px" }}>Report date</th>
                <th style={{ padding: "10px 8px" }}>Comment</th>
                <th style={{ padding: "10px 8px" }}>Created at</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ padding: 16, color: "#666" }}>Inget data att visa, lägg till en sjukanmälning!</td>
                </tr>
              ) : (
                items.map((r) => (
                  <tr key={r.id} style={{ borderBottom: "1px solid #2a2a2a" }}>
                    <td style={{ padding: "10px 8px" }}>{r.id}</td>
                    <td style={{ padding: "10px 8px" }}>{formatDate(r.report_date)}</td>
                    <td style={{ padding: "10px 8px" }}>{r.comment ?? "—"}</td>
                    <td style={{ padding: "10px 8px" }}>{new Date(r.created_at).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
