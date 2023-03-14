import React from "react";
//if we dont import react ,it will be also ok bcs we r not writing any react code here

import { useState } from "react";

import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [

        {
            "_id": "640da5e1084867b8e81395e5",
            "user": "640d91051ea7c6869d741908",
            "title": "update update title",
            "description": "updated update description",
            "tag": "updated update tag",
            "date": "2023-03-12T10:13:53.132Z",
            "__v": 0
        },
        {
            "_id": "640f65ffcc34b53bd7b98a05",
            "user": "640d91051ea7c6869d741908",
            "title": "this is my new title2",
            "description": "this is my new description2",
            "tag": "general",
            "date": "2023-03-13T18:05:51.311Z",
            "__v": 0
        },
        {
            "_id": "640f65ffcc34b53bd7b98a05",
            "user": "640d91051ea7c6869d741908",
            "title": "this is my new title2",
            "description": "this is my new description2",
            "tag": "general",
            "date": "2023-03-13T18:05:51.311Z",
            "__v": 0
        },
        {
            "_id": "640f65ffcc34b53bd7b98a05",
            "user": "640d91051ea7c6869d741908",
            "title": "this is my new title2",
            "description": "this is my new description2",
            "tag": "general",
            "date": "2023-03-13T18:05:51.311Z",
            "__v": 0
        },
        {
            "_id": "640f65ffcc34b53bd7b98a05",
            "user": "640d91051ea7c6869d741908",
            "title": "this is my new title2",
            "description": "this is my new description2",
            "tag": "general",
            "date": "2023-03-13T18:05:51.311Z",
            "__v": 0
        },
        {
            "_id": "640f65ffcc34b53bd7b98a05",
            "user": "640d91051ea7c6869d741908",
            "title": "this is my new title2",
            "description": "this is my new description2",
            "tag": "general",
            "date": "2023-03-13T18:05:51.311Z",
            "__v": 0
        },
        {
            "_id": "640f65ffcc34b53bd7b98a05",
            "user": "640d91051ea7c6869d741908",
            "title": "this is my new title2",
            "description": "this is my new description2",
            "tag": "general",
            "date": "2023-03-13T18:05:51.311Z",
            "__v": 0
        },
        {
            "_id": "640f65ffcc34b53bd7b98a05",
            "user": "640d91051ea7c6869d741908",
            "title": "this is my new title2",
            "description": "this is my new description2",
            "tag": "general",
            "date": "2023-03-13T18:05:51.311Z",
            "__v": 0
        },
        {
            "_id": "640f65ffcc34b53bd7b98a05",
            "user": "640d91051ea7c6869d741908",
            "title": "this is my new title2",
            "description": "this is my new description2",
            "tag": "general",
            "date": "2023-03-13T18:05:51.311Z",
            "__v": 0
        },
        {
            "_id": "640f65ffcc34b53bd7b98a05",
            "user": "640d91051ea7c6869d741908",
            "title": "this is my new title2",
            "description": "this is my new description2",
            "tag": "general",
            "date": "2023-03-13T18:05:51.311Z",
            "__v": 0
        },
        {
            "_id": "640f65ffcc34b53bd7b98a05",
            "user": "640d91051ea7c6869d741908",
            "title": "this is my new title2",
            "description": "this is my new description2",
            "tag": "general",
            "date": "2023-03-13T18:05:51.311Z",
            "__v": 0
        }

    ];

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;



















// import React from "react";
// //if we dont import react ,it will be also ok bcs we r not writing any react code here

// import { useState } from "react";

// import NoteContext from "./noteContext";

// const NoteState = (props) => {


//     const s1 = {
//         "name": "vishal",
//         "class": "5b"
//     }
//     const [state, setState] = useState(s1);
//     const update = () => {
//         setTimeout(() => {
//             setState({
//                 "name": "soni",
//                 "class": "10b"
//             })
//         }, 2000)
//     }
//     return (
//         // <NoteContext.Provider value={state}> //if use only one thing then
//         <NoteContext.Provider value={{ state, update }}>
//             {/* <NoteContext.Provider value={{ state:state, update:update }}> */}
//             {/* we can write also this  */}
//             {props.children}
//         </NoteContext.Provider>
//     )
// }

// export default NoteState; 