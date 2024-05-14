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

    //states for filter section in mobile screen
    showFilterMobileScreen,
    setShowFilterMobileScreen,
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
      setShowFilterMobileScreen(false);

      setIsAllBasicChecked(false);
      setIsAllIntermediateChecked(false);
      setIsAllAdvancedChecked(false);

      getAllQuiz();
    } else {
      setIsAllChecked(false);
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
      setShowFilterMobileScreen(false);

      setIsAllChecked(false);
      setIsAllIntermediateChecked(false);
      setIsAllAdvancedChecked(false);

      getAllBasicQsn();
    } else {
      setIsAllBasicChecked(false);
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
      setShowFilterMobileScreen(false);

      setIsAllChecked(false);
      setIsAllBasicChecked(false);
      setIsAllAdvancedChecked(false);

      getAllIntermediateQsn();
    } else {
      setIsAllIntermediateChecked(false);
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
      setShowFilterMobileScreen(false);

      setIsAllChecked(false);
      setIsAllBasicChecked(false);
      setIsAllIntermediateChecked(false);

      getAllAdvancedQsn();
    } else {
      setIsAllAdvancedChecked(false);
    }
  };

  const handleFilterMobileScreen = () => {
    setShowFilterMobileScreen(true);
  };

  return (
    <>
      <div
        className={
          showFilterMobileScreen
            ? "md:hidden fixed top-16 right-4 rounded-lg z-50 bg-slate-100 text-auto shadow-lg border border-black text-sm w-[250px] h-auto p-4 flex gap-2 flex-col justify-center items-start"
            : "w-full h-full hidden md:flex gap-3 flex-col"
        }
      >
        <div className="flex gap-2 justify-start items-center text-2xl font-semibold md:text-[#007acc]">
          <button
            className="absolute top-3 right-3 md:hidden"
            onClick={() => {
              setShowFilterMobileScreen(false);
            }}
          >
            <IoMdClose />
          </button>
          <div className="hidden md:block">Filters</div>
          <div className="hidden md:block md:text-gray-500">
            <CiFilter />
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            name="all"
            id="all"
            checked={isAllChecked}
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
