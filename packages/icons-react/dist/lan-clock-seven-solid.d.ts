import React from 'react';

export interface LanClockSevenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSevenSolid: React.FC<LanClockSevenSolidProps>;
export default LanClockSevenSolid;
