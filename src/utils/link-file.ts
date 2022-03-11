export const linkFile = (url: string) => {
  // mode ?
  fetch(url, { method: 'GET', mode: 'same-origin' })
    .then((response) => response.blob())
    .then((data) => {
      // force type :)
      const blob = new Blob([data], { type: 'application/pdf' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.target = '_blank'
      link.click()
      link.remove()
    })
}
