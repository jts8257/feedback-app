import { createContext, useState } from 'react';
import FeedBackData from "../data/FeedBackData";
import {v4 as uuidv4} from 'uuid'

const FeedBackContext = createContext()

// context의 provider 는 이런식으로 공급함
export const FeedBackProvider = ({children}) => {
    const [feedBack, setFeedBack] = useState(FeedBackData)
    const [feedBackEdit, setFeedBackEdit] = useState({
      item: {},
      edit: false,
    })
    
    // Add Feedback
    const addFeedBack = (newFeedBack) => {
      newFeedBack.id = uuidv4()
      setFeedBack([newFeedBack, ...feedBack])
    
    }

    // delete Feedback
    const deleteFeedBack = (id) => {
        if (window.confirm('Are your sure you want to delete?')) {
          setFeedBack(feedBack.filter((item) => item.id !== id))
        }
      }

    const updateFeedback = (id, updItem) => {
      setFeedBack(
        feedBack.map((item) => 
          item.id === id ? {...item, ...updItem} : item))
    }

      // set item to be updated
    const editFeedBack = (item) => {
        setFeedBackEdit({
          item: item,
          edit: true
        })
      }

    return <FeedBackContext.Provider value={{
        feedBack: feedBack,
        deleteFeedBack: deleteFeedBack,
        addFeedBack: addFeedBack,
        editFeedBack: editFeedBack,
        feedBackEdit: feedBackEdit,
        updateFeedback: updateFeedback
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext