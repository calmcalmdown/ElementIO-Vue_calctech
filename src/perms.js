// export default {
//   All: '*',
// };

const perms = [
    {
        id: "*",
        name: "Все полномочия"
    },
    {
        id: "usr-ce",
        name: "Может создавать, изменять пользователей"
    },
    {
        id: "role-ce",
        name: "Может создавать, изменять роли"
    },
    {
        id: "usr_role-e",
        name: "Может назначать роль пользователю"
    },
    {
        id: "lang-ce",
        name: "Может изменять справочник 'языки'"
    },
    {
        id: "subject-ce",
        name: "Может изменять справочник 'предметы'"
    },
    {
        id: "topic-ce",
        name: "Может изменять справочник 'темы'"
    },
    {
        id: "sub_topic-ce",
        name: "Может изменять справочник 'подтемы'"
    },
    {
        id: "grade-ce",
        name: "Может изменять справочник 'классы'"
    },
    {
        id: "task-ce",
        name: "Может создавать, изменять задания"
    },
    {
        id: "not_own_task-e",
        name: "Может изменять все задания"
    },
    {
        id: " ",
        name: "Может видеть все задания"
    },
    {
        id: "task-moderate",
        name: "Может модерировать задания"
    },
    {
        id: "group-ce",
        name: "Может создавать, изменять группы"
    },
    {
        id: "tutor",
        name: "Может давать задания группам и ученикам"
    }
]

export default perms