import React from 'react';

export interface LanCircleLThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLThin: React.FC<LanCircleLThinProps>;
export default LanCircleLThin;
