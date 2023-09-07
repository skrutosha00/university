import { server } from "global";

const userName = window.location.pathname.split("/").at(-1);

export async function fetchAllTeachers() {
  return await fetch(`${server}/professors`).then((data) => data.json());
}

export async function fetchTeacherData(teacherId) {
  return await fetch(`${server}/professor_info/${teacherId}/${userName}`).then((data) => data.json());
}

export async function sendMark(teacherId, mark) {
  return await fetch(`${server}/set_mark`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      value: mark,
      creator_id: userName,
      professor_id: teacherId
    })
  });
}

export async function createComment(text, teacherId) {
  return await fetch(`${server}/create_comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      text: text,
      user_id: userName,
      professor_id: teacherId
    })
  });
}

export async function editComment(commentId, text) {
  return await fetch(`${server}/update_comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      text: text,
      comment_id: commentId
    })
  });
}

export async function deleteComment(commentId) {
  return await fetch(`${server}/comment/${commentId}`, {
    method: "DELETE"
  });
}

export async function voteComment(commentId, value) {
  return await fetch(`${server}/set_comment_vote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      comment_id: commentId,
      user_id: userName,
      value: value
    })
  });
}
