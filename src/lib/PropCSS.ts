export default function propCSS(element: HTMLElement, properties: { [key: string]: any }) {
  for (const key in properties) {
    const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase() // replace camelCase with kebab-case

    element.style.setProperty(kebabKey, properties[key])
  }
}