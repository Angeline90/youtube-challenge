export function formatDate(dateString) {
  const publishedDate = new Date(dateString);
  const now = new Date();
  const diff = now - publishedDate;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} an${years > 1 ? "s" : ""}`;
  } else if (months > 0) {
    return `${months} mois`;
  } else if (days > 0) {
    return `${days} jour${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    return `${hours} heure${hours > 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""}`;
  } else {
    return `${seconds} seconde${seconds > 1 ? "s" : ""}`;
  }
}
