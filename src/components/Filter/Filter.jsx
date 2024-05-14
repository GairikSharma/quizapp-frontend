import React, { useState, useContext } from "react";
import { CiFilter } from "react-icons/ci";
import { GlobalContext } from "../../GlobalContext";
import { IoMdClose } from "react-icons/io";

function Filter() {
  const {
    setAllQuiz,
    loader,
    setLoader,
    topic,
    setTopic,
    setShowFilter,

    isAllChecked,
    setIsAllChecked,

    isALlBasicChecked,
    setIsAllBasicChecked,

    isAllIntermediateChecked,
    setIsAllIntermediateChecked,

    isAllAdvancedChecked,
    setIsAllAdvancedChecked,
  } = useContext(GlobalContext);
  console.log(topic);
  const getAllQuiz = async () => {
    try {
      setLoader(true);
      const data = await fetch(
        `https://quizapp-backend-sfcz.vercel.app/all-questions-${topic}`
      );
      const res = await data.json();

      if (res) {
        setAllQuiz(res.all_qs);
        console.log(allquiz);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
    console.log("function for fetching all questions...");
  };

  const handleAllQuestions = () => {
    if (!isAllChecked) {
      setIsAllChecked(true);
      getAllQuiz();
    } else {
      setIsAllChecked(false);
      getAllQuiz();
    }
  };

  const getAllBasicQsn = async () => {
    try {
      setLoader(true);
      const data = await fetch(
        `https://quizapp-backend-sfcz.vercel.app/all-questions-${topic}`
      );
      const res = await data.json();
      if (res) {
        const basicQuestions = res.all_qs.filter((q) => q.level === "Basic");
        setAllQuiz(basicQuestions);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
    console.log("function for fetching basic questions...");
  };

  const handleBasicQuestions = () => {
    if (!isALlBasicChecked) {
      setIsAllBasicChecked(true);
      console.log("just checked");
      getAllBasicQsn();
    } else {
      setIsAllBasicChecked(false);
      console.log("just unchecked");
      getAllQuiz();
    }
  };

  const getAllIntermediateQsn = async () => {
    try {
      setLoader(true);
      const data = await fetch(
        `https://quizapp-backend-sfcz.vercel.app/all-questions-${topic}`
      );
      const res = await data.json();
      if (res) {
        const basicQuestions = res.all_qs.filter(
          (q) => q.level === "Intermediate"
        );
        setAllQuiz(basicQuestions);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
    console.log("function for fetching basic questions...");
  };

  const handleIntermediateQuestions = () => {
    if (!isAllIntermediateChecked) {
      setIsAllIntermediateChecked(true);
      getAllIntermediateQsn();
    } else {
      setIsAllIntermediateChecked(false);
      getAllQuiz();
    }
  };

  const getAllAdvancedQsn = async () => {
    try {
      setLoader(true);
      const data = await fetch(
        `https://quizapp-backend-sfcz.vercel.app/all-questions-${topic}`
      );
      const res = await data.json();
      if (res) {
        const basicQuestions = res.all_qs.filter((q) => q.level === "Advanced");
        setAllQuiz(basicQuestions);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
    console.log("function for fetching basic questions...");
  };

  const handleAdvanceQuestion = () => {
    if (!isAllAdvancedChecked) {
      setIsAllAdvancedChecked(true);
      getAllAdvancedQsn();
    } else {
      setIsAllAdvancedChecked(false);
      getAllQuiz();
    }
  };

  return (
    <>
      <div className="w-full h-full flex gap-3 flex-col">
        <div className="flex gap-2 justify-start items-center text-2xl font-semibold md:text-[#007acc]">
          <button
            className="absolute top-3 right-3 md:hidden"
            onClick={() => {
              setShowFilter(false);
            }}
          >
            <IoMdClose />
          </button>
          Filters{" "}
          <div className="md:text-gray-500">
            <CiFilter />
          </div>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="all"
            id="all"
            onChange={handleAllQuestions}
          />
          <label htmlFor="all"> All </label>
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            name="basic"
            id="basic"
            checked={isALlBasicChecked}
            onChange={handleBasicQuestions}
          />
          <label htmlFor="basic"> Basic </label>
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            name="intermediate"
            id="intermediate"
            checked={isAllIntermediateChecked}
            onChange={handleIntermediateQuestions}
          />
          <label htmlFor="intermediate"> Intermediate </label>
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            name="advanced"
            id="advanced"
            checked={isAllAdvancedChecked}
            onChange={handleAdvanceQuestion}
          />
          <label htmlFor="advanced"> Advanced </label>
        </div>
      </div>
    </>
  );
}

export default Filter;
