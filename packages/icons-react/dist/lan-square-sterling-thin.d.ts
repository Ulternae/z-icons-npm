import React from 'react';

export interface LanSquareSterlingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSterlingThin: React.FC<LanSquareSterlingThinProps>;
export default LanSquareSterlingThin;
