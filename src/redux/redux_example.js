  const token = useSelector(state => state.authInfo.auth_token.token)

  const avatar_url = useSelector(state => state.authInfo.avatar)

  const avatar_name = useSelector(state => state.authInfo.avatar.name)

  const user_name = useSelector(state => state.authInfo.username)

  const follower = useSelector(state => state.authInfo.followers)

  const following = useSelector(state => state.authInfo.following)

  const likes = useSelector(state => state.authInfo.likes)

  const bio = useSelector(state => state.authInfo)