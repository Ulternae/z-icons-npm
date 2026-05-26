import React from 'react';

export interface LanCircleSterlingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSterling: React.FC<LanCircleSterlingProps>;
export default LanCircleSterling;
