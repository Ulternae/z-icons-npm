import React from 'react';

export interface LanClockOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockOne: React.FC<LanClockOneProps>;
export default LanClockOne;
