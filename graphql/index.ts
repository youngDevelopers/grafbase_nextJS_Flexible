export const getUserQuery = `
   query GetUUser($email: String!) {
       user(by: { email: $email }) {
           id
           name
           email
           avatarUrl
           description
           githubUrl
           linkedinUrl
       }
   }
`

export const createUserMutation = `
   mutation CreateUser($input:  UserCreateInput!){
       userCreate(input: $input) {
           user {
               name
               email
               avatarUrl
               description
               githubUrl
               linkedinUrl
               id
           }
       }
   }
`