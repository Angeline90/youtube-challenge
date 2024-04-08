export function formatNumberOfViews(views) {
  switch (true) {
    case views >= 1000000000:
      return `${Math.floor(views / 1000000000)} Md de`;
    case views >= 1000000:
      return `${Math.floor(views / 1000000)} M de`;
    case views >= 1000:
      return `${Math.floor(views / 1000)} k de`;
    default:
      return views;
  }
}
