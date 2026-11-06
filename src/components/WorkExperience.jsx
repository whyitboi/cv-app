import { useState } from "react";

export function WorkExperience() {
  const [isEditing, setIsEditing] = useState(true);
  const [workInfo, setWorkInfo] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "",
      position: "",
      responsibilities: "",
      starDate: "",
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
        starDate: "",
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
        {workInfo.map((index, job) => (
          <fieldset key={job.id}>
            <legend>Job {index + 1}</legend>
            <label>
              Company Name:
              <input
                type="text"
                name="companyName"
                value={workInfo.companyName}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </label>
            <label>
              Position:
              <input
                type="text"
                name="position"
                value={workInfo.position}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </label>
            <label>
              Job Responsibilities:
              <input
                type="textarea"
                rows="4"
                cols="6"
                name="responsibilities"
                value={workInfo.responsibilities}
                onChange={handleChange}
              />
            </label>
            <label>
              From:
              <input
                type="month"
                name="startDate"
                value={workInfo.startDate}
                onChange={handleChange}
              />
            </label>
            <label>
              Until:
              <input
                type="month"
                name="endDate"
                value={workInfo.endDate}
                onChange={handleChange}
                min={job.starDate}
              />
            </label>
            {workInfo.length > 1 && (
              <button
                type="button"
                onClick={() => removeJob(job.id)}
                aria-label={`Remove job ${index + 1}`}
              >
                Remove
              </button>
            )}
          </fieldset>
        ))}
        <button type="button" onClick={() => addJob()}>
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
            {job.companyName} ` ${job.starDate} - ` {job.endDate || "Present"}
          </p>
          <ul>{job.responsibilities.split("\n")}</ul>
        </article>
      ))}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </section>
  );
}
