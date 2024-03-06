/**
 * This function (used inside a svelte use:propCSS) is used to set multiple css properties on an element
 * @param element the (from svelte) provided element, to which the css properties will be applied
 * @param properties an object with css properties, where the key is the css property name (like backgroundColor) and the value is the css property value
 */
export default function propCSS(element: HTMLElement, properties: { [key: string]: any }) {
  for (const key in properties) {
    const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase() // replace camelCase with kebab-case

    element.style.setProperty(kebabKey, properties[key])
  }
}