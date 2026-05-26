import React from 'react';

export interface LanCarSideBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSideBoltThin: React.FC<LanCarSideBoltThinProps>;
export default LanCarSideBoltThin;
