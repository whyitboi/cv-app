import { useState } from "react";
// import "./style.css";

export function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    location: "",
    website: "",
    linkedin: "",
    github: "",
    summary: "",
  });
  //onChange handler
  function handleChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }
  const fullname = `${info.firstName} ${info.lastName}`;
  return isEditing ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(false);
      }}
    >
      <fieldset>
        <legend>General Information</legend>
        <label>
          Firstname:{" "}
          <input
            type="text"
            name="firstName"
            value={info.firstName}
            onChange={handleChange}
            autoComplete="given-name"
            required
          />
        </label>
        <label>
          Lastname:{" "}
          <input
            type="text"
            name="lastName"
            value={info.lastName}
            onChange={handleChange}
            autoComplete="family-name"
            required
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </label>
        <label>
          Phone number:{" "}
          <input
            type="tel"
            name="phone"
            value={info.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </label>
        <label>
          Job title:{" "}
          <input
            type="text"
            name="jobTitle"
            value={info.jobTitle}
            onChange={handleChange}
            autoComplete="organization-title"
          />
        </label>
        <label>
          City / Location:{" "}
          <input
            type="text"
            name="location"
            value={info.location}
            onChange={handleChange}
            autoComplete="address-level2"
          />
        </label>
        <label>
          Website or portfolio:{" "}
          <input
            type="url"
            name="website"
            value={info.website}
            onChange={handleChange}
            autoComplete="url"
          />
        </label>
        <label>
          LinkedIn:{" "}
          <input
            type="url"
            name="linkedin"
            value={info.linkedin}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label>
          Github:{" "}
          <input
            type="url"
            name="github"
            value={info.github}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label>
          Short summary:{" "}
          <textarea
            name="summary"
            value={info.summary}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  ) : (
    <section>
      <h2 className="fullName">{fullname}</h2>
      <p>{info.jobTitle}</p>
      <address>
        <ul>
          <li>
            <a href={`mailto:${info.email}`}>{info.email}</a>
          </li>
          <li>
            <a href={`tel:${info.phone}`}>{info.phone}</a>
          </li>
          <li>{info.location} </li>
          {info.website && (
            <li>
              <a href={info.website}>Portfolio</a>
            </li>
          )}
          {info.linkedin && (
            <li>
              <a href={info.linkedin}>LinkedIn</a>
            </li>
          )}
          {info.github && (
            <li>
              <a href={info.github}>Github</a>
            </li>
          )}
        </ul>
      </address>

      {info.summary && <p> {info.summary} </p>}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </section>
  );
}
