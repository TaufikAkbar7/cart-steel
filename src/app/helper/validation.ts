export const phoneNumberValidation = (value: string) => {
  if (!value) return false
  const pattern = /^[0-9,-]*$/
  return pattern.test(value)
}
