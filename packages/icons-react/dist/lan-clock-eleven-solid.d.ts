import React from 'react';

export interface LanClockElevenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockElevenSolid: React.FC<LanClockElevenSolidProps>;
export default LanClockElevenSolid;
