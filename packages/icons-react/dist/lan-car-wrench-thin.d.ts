import React from 'react';

export interface LanCarWrenchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarWrenchThin: React.FC<LanCarWrenchThinProps>;
export default LanCarWrenchThin;
