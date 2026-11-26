export function createElement(tag: string, id?: string, className?: string): HTMLElement {
  const elem: HTMLElement = document.createElement(tag);
  if (id) elem.id = id;
  if (className) elem.classList.add(className);
  return elem;
}