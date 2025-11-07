import { useState } from "react";
import { createReport, type CreateReportDto } from "../api/queries.js";
import type { SickReport } from "../utils/types.js";

type Props = { onCreated: (r: SickReport) => void };

export default function ReportForm({ onCreated }: Props) {
  const [date, setDate] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    if (!date) {
      setErr("Välj ett datum.");
      return;
    }

    const payload: CreateReportDto = {
      report_date: date,          // "YYYY-MM-DD" från <input type="date">
      comment: comment || null,
    };

    try {
      setSubmitting(true);
      const created = await createReport(payload);
      onCreated(created);        
      setDate("");
      setComment("");
    } catch (e: any) {
      setErr(e?.message ?? "Kunde inte spara");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}
          style={{ display: "grid", gap: 12, marginBottom: 24, maxWidth: 600 }}>
      <div>
        <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>
          Frånvarodatum
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ padding: 8, width: "100%", borderRadius: 8, border: "1px solid #444" }}
          required
        />
      </div>

      <div>
        <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>
          Kommentar
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          placeholder="Ange sjukdomsdetaljer eller liknande..."
          style={{ padding: 8, width: "100%", borderRadius: 8, border: "1px solid #444", resize: "vertical" }}
        />
      </div>

      {err && <div style={{ color: "crimson" }}>{err}</div>}

      <div>
        <button
          type="submit"
          disabled={submitting}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #666",
            background: submitting ? "#333" : "#1f6feb",
            color: "white",
            cursor: submitting ? "not-allowed" : "pointer",
            fontWeight: 600
          }}
        >
          {submitting ? "Sparar…" : "Spara"}
        </button>
      </div>
    </form>
  );
}
