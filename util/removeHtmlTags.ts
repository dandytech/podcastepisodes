export function removeHtmlTags(text: string): string {
  return text.replace(/<[^>]+>/g, ""); // This will remove any HTML tags
}
