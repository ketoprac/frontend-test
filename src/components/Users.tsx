import React from 'react'
import Disclosure from './Disclosure'

const Users = (props: any) => {
  const { query, error, isLoading, users} = props;
  return (
    <div>
    {!query ? null : error ? (
      <p>Oh no, there was an error</p>
    ) : isLoading ? (
      <p>Loading...</p>
    ) : users.items && users.items.length > 1 ? (
      users.items.map((user: any) => <Disclosure title={user.login} />)
    ) : (
      <p>Not found</p>
    )}
  </div>
  )
}

export default Users