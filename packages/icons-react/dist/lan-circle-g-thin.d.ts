import React from 'react';

export interface LanCircleGThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleGThin: React.FC<LanCircleGThinProps>;
export default LanCircleGThin;
