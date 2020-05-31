import React, { useEffect } from 'react'
export default () => {
  useEffect(() => {
    window.location.href = '/blog'
  }, [])
  return null
}
