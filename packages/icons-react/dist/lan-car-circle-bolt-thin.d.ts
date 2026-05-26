import React from 'react';

export interface LanCarCircleBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarCircleBoltThin: React.FC<LanCarCircleBoltThinProps>;
export default LanCarCircleBoltThin;
