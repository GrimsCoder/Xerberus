import React, { useEffect } from "react";
import papers from "../../data/research.json";
import useSortTableData from "../useSortableData";

function ResearchTable() {
  const { items, requestSort, sortConfig } = useSortTableData(papers);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="flex flex-col p-10 sm:p-20 w-[95%] md:w-[80%]">
      <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("title")}
                className={getClassNamesFor("title")}
              >
                Title
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("date")}
                className={getClassNamesFor("date")}
              >
                Date
              </button>
            </th>
            {/* <th>Key Words</th> */}
          </tr>
        </thead>
        <tbody>
          {items.map((paper) => (
            <tr
              key={paper.title}
              className="hover:bg-slate-50 hover:translate-y-px "
            >
              <td className="">
                <a
                  className="flex w-[100%]"
                  target="_blank"
                  rel="noreferrer"
                  href={paper.link}
                >
                  <button className="font-bold ">
                    {paper.title}
                    <span style={{ color: "#ff0000" }}>
                      &nbsp;
                      {paper.number}
                    </span>
                  </button>
                </a>
              </td>
              <td>{paper.date}</td>
              {/* <td>{paper.keywords}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResearchTable;
