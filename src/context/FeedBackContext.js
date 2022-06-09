import { createContext, useEffect, useState } from 'react';
import FeedBackData from "../data/FeedBackData";
import {v4 as uuidv4} from 'uuid'

const FeedBackContext = createContext()

// context의 provider 는 이런식으로 공급함
export const FeedBackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedBack, setFeedBack] = useState([])
    const [feedBackEdit, setFeedBackEdit] = useState({
      item: {},
      edit: false,
    })

    // run only once whenever refresh
    useEffect(() => {
      fetchFeedback()
    }, [])

    // Fetch feedback
    const fetchFeedback = async () => {
      // localhost:5000 라는걸 모든 요청에 넣기 싫으면 package.json 에서 proxy로 설정하면됨
      const response = await fetch(`/feedback?_sort=id&_order=desc`)
      const data = await response.json()

      setFeedBack(data)
      setIsLoading(false)
    }

    // Add Feedback
    const addFeedBack = async (newFeedBack) => {
      const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedBack)
      })

      const data = await response.json()
      setFeedBack([data, ...feedBack])
    }

    // delete Feedback
    const deleteFeedBack = async (id) => {
        if (window.confirm('Are your sure you want to delete?')) {
          await fetch(`/feedback/${id}`, {method:'DELETE'})
          setFeedBack(feedBack.filter((item) => item.id !== id))
        }
      }
    
    // update Feedback
    const updateFeedback = async (id, updItem) => {
      const response = await fetch(`feedback/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updItem)
      })

      const data = await response.json()

      setFeedBack(
        feedBack.map((item) => 
          item.id === id ? {...item, ...data} : item))
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
        isLoading: isLoading,
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