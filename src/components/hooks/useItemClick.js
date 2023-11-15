import{ useState } from 'react';

const useItemClick = () => {

    const [showForm,setShowForm]= useState(false)


    const handleItemClick = (itemName) => {
        if (itemName === "Document") {
          setShowForm(true);
        }
        else if (itemName === "Message") {
          setShowForm(false);
        }  else {
          setShowForm(false);
        }
      };

      const closeForm = () => {
        setShowForm(false);
      };

    return { showForm,handleItemClick,closeForm };
}
 
export default useItemClick;




// useItemClick.js



