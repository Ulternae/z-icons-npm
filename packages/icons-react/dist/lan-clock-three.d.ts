import React from 'react';

export interface LanClockThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockThree: React.FC<LanClockThreeProps>;
export default LanClockThree;
