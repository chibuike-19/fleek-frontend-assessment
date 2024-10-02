export function truncateText(text: string | undefined, maxLength: number) {
  if (text!.length > maxLength) {
    return text?.substring(0, maxLength) + "...";
  } else {
    return text;
  }
}
