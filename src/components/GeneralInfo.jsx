export function General() {
  return (
    <>
      <fieldset>
        <legend>General Information</legend>
        <label>
          Firstname: <input type="text" autoComplete="firstname" required />
        </label>
        <label>
          Lastname: <input type="text" autoComplete="lastname" required />
        </label>
        <label>
          Email: <input type="email" autoComplete="email" required />
        </label>
        <label>
          Phone number: <input type="tel" autoComplete="phone" required />
        </label>
        <label>
          Job title: <input type="text" autoComplete="organization-title" />
        </label>
        <label>
          City / Location: <input type="text" autoComplete="address-level2" />
        </label>
        <label>
          Website or portfolio:{" "}
          <input type="url" name="website" autoComplete="url" />
        </label>
        <label>
          LinkedIn: <input type="url" autoComplete="url" />
        </label>
        <label>
          Github: <input type="url" autoComplete="url" />
        </label>
        <label>
          Short summary: <textarea name="summary" />
        </label>
      </fieldset>

      <section>{/* should the display mode be here? */}</section>
    </>
  );
}
