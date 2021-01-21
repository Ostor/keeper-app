import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import DeleteIcon from '@material-ui/icons/Delete';

import CreateArea from "./CreateArea";



function App() {

  const [itemsNote, setItemsNote] = useState([]);
  console.log(itemsNote);
  

  function addItems(inputTitle, inputContent) {
    setItemsNote((prevValue) => {
      return [...prevValue, {title:inputTitle, content:inputContent}];
    });
  }

  function deleteItemFromArray(id) {

    setItemsNote((prevItems) => {
        return prevItems.filter((item, index) => {
          return index !== id;
        });
      });
  }

  return (
    <div>
      <Header />
      <CreateArea handleArrayItems={addItems} />
      
      {itemsNote.map( (noteTerm, index) =>  
            <Note 
                key={index}
                id={index}
                title={noteTerm.title}
                content={noteTerm.content}
                deleteItem={deleteItemFromArray}
            />
        )}

      <Footer />
    </div>
  );
}

export default App;
