import React from 'react';

export interface LanCircle1ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle1Thin: React.FC<LanCircle1ThinProps>;
export default LanCircle1Thin;
