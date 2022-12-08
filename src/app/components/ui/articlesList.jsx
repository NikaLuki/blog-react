import React from "react";
import ArticleCard from "./articleCard";
const fakeAList = [
    {
        title: "Тестовая статья",
        imgURL: "https://www.dipowrites.com/wp-content/uploads/2013/10/Wednesday-Epic-Day-01-s.jpg",
        contenet: "контент тестовой статьи",
        createdAt: "Last updated 3 mins ago",
        category: "main",
        description: "Крутая статья"
    }
];

const ArticlesList = () => {
    return (
        <>
            {fakeAList.map((a, i) => (
                <ArticleCard key={i} {...a} />
            ))}
        </>
    );
};

export default ArticlesList;
