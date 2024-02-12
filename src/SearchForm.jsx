import React from "react";

export default function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    console.log(searchValue);
    if (!searchValue) return;
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
}
