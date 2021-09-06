import React, {useState} from "react";
import s from "./Paginator.module.css"
import cn from "classnames";

type PaginatorType = {
    currentPage: number
    totalResults: number
}


export const Paginator = ({currentPage, totalResults = 446}: PaginatorType) => {
    const [portionSize, setPortionSize] = useState<number>(10)
    // const [totalResults, setTotalResults] = useState<number>(446)
    // const [currentPage, setCurrentPage] = useState<number>(1)
    let [portionNumber, setPortionNumber] = useState<number>(1);
    const [imdbID, setImdbID] = useState<string>("")


    let pagesCount = Math.ceil(totalResults / 10);
    let pages = [];
    // let [pages, setPages] = useState<Array<any>>([]);

    const onPageChanged = (currentPage: number) => {
        // dispatch(getTC(currentPage, imdbID))
        // setPages([currentPage])
    }


    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>{"<"}</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span
                            className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                            key={p}
                            onClick={(e) => {
                                onPageChanged(p)
                            }}>{p}</span>
                    })
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>{">"}</button>
            }
        </div>
    )
}
