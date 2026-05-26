import React from 'react';

export interface LanCircleXThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleXThin: React.FC<LanCircleXThinProps>;
export default LanCircleXThin;
