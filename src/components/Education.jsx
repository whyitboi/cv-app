import { useState } from "react";

export function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [schoolInfo, setSchoolInfo] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ]);
  function handleChange(e, id) {
    setSchoolInfo(
      schoolInfo.map((school) =>
        school.id === id
          ? { ...school, [e.target.name]: e.target.value }
          : school,
      ),
    );
  }
  function addSchool() {
    setSchoolInfo([
      ...schoolInfo,
      {
        id: crypto.randomUUID(),
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }
  function removeSchool(id) {
    setSchoolInfo(schoolInfo.filter((school) => school.id !== id));
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
        {schoolInfo.map((school, index) => (
          <fieldset key={school.id}>
            <legend>School {index + 1}</legend>
            <label>
              School/University
              <input
                type="text"
                name="schoolName"
                value={school.schoolName}
                onChange={(e) => handleChange(e, school.id)}
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
                onChange={(e) => handleChange(e, school.id)}
                required
              />
            </label>
            <label>
              From
              <input
                type="month"
                name="startDate"
                value={school.startDate}
                onChange={(e) => handleChange(e, school.id)}
              />
            </label>
            <label>
              Until
              <input
                type="month"
                name="endDate"
                value={school.endDate}
                onChange={(e) => handleChange(e, school.id)}
              />
            </label>
            <button type="button" onClick={() => removeSchool(school.id)}>
              Remove
            </button>
          </fieldset>
        ))}

        <button type="button" onClick={() => addSchool()}>
          Add
        </button>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  ) : (
    <section>
      <h2>Education</h2>
      {schoolInfo.map((school) => (
        <article>
          <h3>{school.schoolName}</h3>
          <p>{`${school.degree} ${school.startDate} - ${school.endDate}`}</p>
        </article>
      ))}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </section>
  );
}
