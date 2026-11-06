import { useState } from "react";

export function WorkExperience() {
  const [isEditing, setIsEditing] = useState(true);
  const [workInfo, setWorkInfo] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  ]);
  function handleChange(e, id) {
    setWorkInfo(
      workInfo.map((job) =>
        job.id === id ? { ...job, [e.target.name]: e.target.value } : job,
      ),
    );
  }
  function addJob() {
    setWorkInfo([
      ...workInfo,
      {
        id: crypto.randomUUID(),
        companyName: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }
  function removeJob(id) {
    setWorkInfo(workInfo.filter((job) => job.id !== id));
  }
  return isEditing ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(false);
      }}
    >
      <fieldset>
        <legend>Work Experience</legend>
        {workInfo.map((job, index) => (
          <fieldset key={job.id}>
            <legend>Job {index + 1}</legend>
            <label>
              Company Name:
              <input
                type="text"
                name="companyName"
                value={job.companyName}
                onChange={(e) => handleChange(e, job.id)}
                autoComplete="off"
                required
              />
            </label>
            <label>
              Position:
              <input
                type="text"
                name="position"
                value={job.position}
                onChange={(e) => handleChange(e, job.id)}
                autoComplete="off"
                required
              />
            </label>
            <label>
              Job Responsibilities:
              <textarea
                cols="6"
                name="responsibilities"
                value={job.responsibilities}
                onChange={(e) => handleChange(e, job.id)}
              />
            </label>
            <label>
              From:
              <input
                type="month"
                name="startDate"
                value={job.startDate}
                onChange={(e) => handleChange(e, job.id)}
              />
            </label>
            <label>
              Until:
              <input
                type="month"
                name="endDate"
                value={job.endDate}
                onChange={(e) => handleChange(e, job.id)}
                min={job.startDate}
              />
            </label>
            {workInfo.length > 1 && (
              <button
                type="button"
                onClick={() => removeJob(job.id)}
                aria-label={`Remove job ${index + 1}`}
                className="remove-btn"
              >
                Remove
              </button>
            )}
          </fieldset>
        ))}
        <button type="button" onClick={() => addJob()} className="add-btn">
          Add
        </button>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  ) : (
    <section>
      <h2>Work Experience</h2>
      {workInfo.map((job) => (
        <article key={job.id}>
          <h3>{job.position}</h3>
          <p>
            {job.companyName} {job.startDate} - {job.endDate || "Present"}
          </p>
          <ul>
            {job.responsibilities
              .split("\n")
              .filter((role) => role.trim() !== "")
              .map((role, i) => (
                <li key={i}>{role}</li>
              ))}
          </ul>
        </article>
      ))}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </section>
  );
}
