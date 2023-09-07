import { useState, createContext } from "react";

export const Context = createContext({});

export function ContextProvider({ children }) {
  const [allTeachers, setAllTeachers] = useState(null);
  const [chosenTeacher, setChosenTeacher] = useState(null);
  const [teacherData, setTeacherData] = useState(null);

  return (
    <Context.Provider
      value={{
        allTeachers,
        setAllTeachers,
        chosenTeacher,
        setChosenTeacher,
        teacherData,
        setTeacherData
      }}>
      {children}
    </Context.Provider>
  );
}
