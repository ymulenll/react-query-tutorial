import React, { useState } from "react";
import { createNewPost } from "../api/posts";

function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await createNewPost({ title, body });

      setTitle("");
      setBody("");
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  return (
    <section>
      <h2>Create Post:</h2>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-2">
          <label htmlFor="title" className="form-label">
            <b>Title:</b>
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="content">
            <b>Content:</b>
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{ resize: "vertical" }}
            id="content"
            className="form-control"
          ></textarea>
        </div>

        <button disabled={isLoading || !title} className="btn btn-primary mb-2">
          {isLoading ? (
            <>
              <span className="spinner-border spinner-border-sm"></span>{" "}
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>
        {error && (
          <p className="alert alert-danger">
            Error creating the post: {error.message}
          </p>
        )}
        {/* <div className="alert alert-success alert-dismissible" role="alert">
          The post was saved successfuly
          <button type="button" className="btn-close"></button>
        </div> */}
      </form>
    </section>
  );
}

export default NewPost;
