export default function clearPlace(container) {
  if (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
