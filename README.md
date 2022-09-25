#  Hermes
Notion type Share Widget.

## Props
**users** List of users

Type: any[]

Note: Should contain { name, email } for the user

---

**groups** List of groups

Type: any[]

Note: Should contain { name, email, users } for the group

---

**onSubmit** Submit callback

Type: ({ publicAccess: 0 | 1 | 2 | 3 | null, selected: any[] }) => void

Note: Callback to call an API, do some computations on the selected groups, users and their access, etc.

---

**buttonProps** Button Props

[Check here](https://chakra-ui.com/docs/components/button/usage) for the docs.

---

**children** Button content

Default: Share
