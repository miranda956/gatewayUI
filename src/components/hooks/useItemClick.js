import { useState } from "react";

const useItemClick = () => {
  const [showForm, setShowForm] = useState(false);

  const [visibility, setVisibility] = useState("ShowForm");

  const handleItemClick = (toggle) => {
    const newItem = toggle === "ShowForm" ? "HideForm" : "ShowForm";
    setVisibility(newItem);

    if (toggle === "ShowForm") {
      setShowForm(true);
    } else if (toggle === "HideForm") {
      setShowForm(false);
    } else {
      setShowForm(false);
    }
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return { showForm, handleItemClick, closeForm, visibility };
};

export default useItemClick;

// useItemClick.js
