import React from 'react';

export interface LanCircleManatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleManatThin: React.FC<LanCircleManatThinProps>;
export default LanCircleManatThin;
