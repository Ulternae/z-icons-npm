import React from 'react';

export interface LanCircleSterlingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSterlingThin: React.FC<LanCircleSterlingThinProps>;
export default LanCircleSterlingThin;
