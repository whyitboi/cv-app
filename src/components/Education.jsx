import { useState } from "react";

export function Education() {
  const [id, setId] = useState(1);
  const [isEditing, setIsEditing] = useState(true);
  const [schoolInfo, setSchoolInfo] = useState([
    { id: "", school: "", startDate: "", endDate: "" },
    { id: "", school: "", startDate: "", endDate: "" },
  ]);
  function handleChange(e) {
    setSchoolInfo([{ ...schoolInfo, [e.target.name]: e.target.value }]);
  }

  return isEditing ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(false);
      }}
    >
      <fieldset>
        <legend>Education</legend>
        <fieldset>
          <legend>School {id}</legend>
          <label>
            School/University
            <input
              type="text"
              name="school"
              value={schoolInfo.school}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
          <label>
            Degree of Study
            <input
              type="text"
              name="degree"
              value={schoolInfo.degree}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            From
            <input
              type="month"
              name="startDate"
              value={schoolInfo.startDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Until
            <input
              type="month"
              name="endDate"
              value={schoolInfo.endDate}
              onChange={handleChange}
            />
          </label>
          <button type="button">Remove</button>
        </fieldset>
        <fieldset>
          <legend>School {setId(id + 1)}</legend>
          <label>
            School/University
            <input
              type="text"
              name="school"
              value={schoolInfo.school}
              onChange={handleChange}
              autoComplete="off"
            />
          </label>
          <label>
            Degree of Study
            <input
              type="text"
              name="degree"
              value={schoolInfo.degree}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            From
            <input
              type="month"
              name="startDate"
              value={schoolInfo.startDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Until
            <input
              type="month"
              name="endDate"
              value={schoolInfo.endDate}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button type="button">Add</button>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  ) : (
    <section>
      <h2>Education</h2>
      {/* Shouldn't I have created an array that I can render here using map? */}
      <article>
        <h3></h3>
      </article>
    </section>
  );
}
