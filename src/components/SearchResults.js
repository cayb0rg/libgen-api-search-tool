import React, { useState, useEffect, Suspense } from "react";
import Card from "./Card";
import Loading from "./Loading";
import gsap from "gsap";
import SkeletonResults from "./SkeletonResults";

export default function SearchResults(props) {
  const [sortBy, setSortBy] = useState();
  const [sortDesc, setSortDesc] = useState(true);
  const [sortByChanged, setSortByChanged] = useState(false);

  useEffect(() => {
    props.setRedirectToResults(true);
    gsap.set(".search-logo", {
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      duration: 1,
    });
    gsap.set(".logo", {
      marginLeft: 0,
      duration: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    });
    gsap.set(".search-logo", {
      y: 0,
      duration: 1,
    });
    gsap.set("header", {
      flexDirection: "row",
    });
  }, []);

  return props.errors.noResultsFound ? (
    <p>No Results Found</p>
  ) : props.isLoading ? (
    <SkeletonResults 
    mobile={props.mobile}></SkeletonResults>
  ) : (
    <div className="searchResults">
      {props.results.map((book) => {
        return (
          <Card
            id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
            coverurl={book.coverurl}
            filesize={book.filesize}
            year={book.year}
            extension={book.extension}
            mobile={props.mobile}
            setMobile={props.setMobile}
          ></Card>
        );
      })}
    </div>
  );
  {/* <Suspense fallback={<SkeletonResults 
    mobile={props.mobile}></SkeletonResults>}>
      <div className="searchResults">
      {props.results.map((book) => {
        return (
          <Card
            id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
            coverurl={book.coverurl}
            filesize={book.filesize}
            year={book.year}
            extension={book.extension}
            mobile={props.mobile}
            setMobile={props.setMobile}
          ></Card>
        );
      })}
    </div>
    </Suspense> */}
  
}
