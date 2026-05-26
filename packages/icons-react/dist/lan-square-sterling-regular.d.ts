import React from 'react';

export interface LanSquareSterlingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSterlingRegular: React.FC<LanSquareSterlingRegularProps>;
export default LanSquareSterlingRegular;
