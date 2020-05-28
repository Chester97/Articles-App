export function convertNewsBodyToHTML(newsBody) {
  return newsBody.map(({ data }) => `${data}<br/>`).join('');
}
