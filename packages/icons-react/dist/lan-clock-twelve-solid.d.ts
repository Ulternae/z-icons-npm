import React from 'react';

export interface LanClockTwelveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTwelveSolid: React.FC<LanClockTwelveSolidProps>;
export default LanClockTwelveSolid;
