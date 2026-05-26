import React from 'react';

export interface LanSquareSterlingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSterling: React.FC<LanSquareSterlingProps>;
export default LanSquareSterling;
