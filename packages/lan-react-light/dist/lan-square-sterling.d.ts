import React from 'react';

export interface LanSquareSterlingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareSterling(props: LanSquareSterlingProps): React.ReactElement;
export default LanSquareSterling;
