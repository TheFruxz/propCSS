// Reexport your entry components here

/**
 * This type is used to define css properties, where the key is the css property name (like backgroundColor) and the value is the css property value
 */
export type CSSProperties = { [key: string]: any }

/**
 * This function (used inside a svelte use:propCSS) is used to set multiple css properties on an element
 * @param element the (from svelte) provided element, to which the css properties will be applied
 * @param properties an object with css properties, where the key is the css property name (like backgroundColor) and the value is the css property value
 */
export default function propCSS(element: HTMLElement, properties: CSSProperties) {
    for (const key in properties) {
      const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase() // replace camelCase with kebab-case
  
      element.style.setProperty(kebabKey, properties[key])
    }
  }