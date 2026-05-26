import React from 'react';

export interface LanCarWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarWrench: React.FC<LanCarWrenchProps>;
export default LanCarWrench;
