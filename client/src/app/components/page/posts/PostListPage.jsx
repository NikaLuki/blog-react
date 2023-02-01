import React from "react";
import PostList from "../../ui/PostList";

const fakePsots = [
    {
        id: 1,
        content: "Расскажу вам про шизу",
        url: "https://cdnb.artstation.com/p/assets/images/images/002/752/237/large/kevin-koesnodihardjo-kindred-phinyx.jpg?1465312452"
    },
    {
        id: 2,
        content: "Расскажу вам про шизу",
        url: "https://phonoteka.org/uploads/posts/2022-09/1663262481_43-phonoteka-org-p-van-pis-art-instagram-54.jpg"
    },
    { id: 3, content: "Расскажу вам про шизу", url: "" },
    { id: 4, content: "Расскажу вам про шизу", url: "" }
];
const PostListPage = () => {
    const postsList = fakePsots;
    return (
        <div className="scroll-auto">
            <header className="py-16 sm:text-center">
                <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold">
                    Мои посты
                </h1>
            </header>
            <PostList>
                {postsList &&
                    postsList.map((item) => (
                        <PostList.Item key={item.id} item={item} />
                    ))}
            </PostList>
        </div>
    );
};

export default PostListPage;
