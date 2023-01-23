import React from "react";
import Comment from "./Comment";

const Comments = [
    {
        name : "이피글",
        comment :"안녕하세요 피글입니다.",
    },
    {
        name : "김티거",
        comment :"리액트 재미있어요!~",
    },
    {
        name : "장푸우",
        comment :"저도 리액트 잘 하고 싶습니다 !",
    },
];

function CommentList(props) {
    return (
        <div>
            {Comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment = {comment.comment} />
                );
            })}
            <Comment name = {"삼피글"} comment = {"안녕하세요, 세번째 피글입니다."}></Comment>
        </div>
    );
}

export default CommentList;