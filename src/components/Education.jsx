import { useState } from "react";

export function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [schoolInfo, setSchoolInfo] = useState([
    { id: crypto.randomUUID(), schoolName: "", startDate: "", endDate: "" },
    // { id: crypto.randomUUID(), schoolName: "", startDate: "", endDate: "" },
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
        {schoolInfo.map((school, index) => {
          <fieldset key={school.id}>
            <legend>School{index + 1}</legend>
            <label>
              School/University
              <input
                type="text"
                name="school"
                value={school.schoolName}
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
                value={school.degree}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              From
              <input
                type="month"
                name="startDate"
                value={school.startDate}
                onChange={handleChange}
              />
            </label>
            <label>
              Until
              <input
                type="month"
                name="endDate"
                value={school.endDate}
                onChange={handleChange}
              />
            </label>
            <button type="button">Remove</button>
          </fieldset>;
        })}

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
