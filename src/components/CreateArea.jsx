import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  function handleInputTitle(event) {
    const newTitle = event.target.value;
    setInputTitle(newTitle);
  }

  function handleInputContent(event) {
    const newContent = event.target.value;
    setInputContent(newContent);
  }

  function subNote(event) {
    event.preventDefault();
  }
  // onSubmit={subNote}

  function expand () {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input
          name="title"
          placeholder="Title"
          value={inputTitle}
          onChange={handleInputTitle}
        /> : null }
        <textarea
          name="content"
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={inputContent}
          onChange={handleInputContent}
        />
        <Zoom in={isExpanded}>
        <Fab
          onClick={(event) => {
            props.handleArrayItems(inputTitle, inputContent);
            event.preventDefault();
            setInputTitle("");
            setInputContent("");
          }}
        >
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
