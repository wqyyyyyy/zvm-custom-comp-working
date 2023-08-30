/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */

interface DisplayProps {
  globalData: Record<string, any>;
  value?: string;
}

export function Display(props: DisplayProps) {
  console.log(props.value5)
  return <h1>{props.value || 'NO INPUT'}</h1>;
}
