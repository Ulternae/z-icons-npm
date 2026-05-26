import React from 'react';

export interface LanClockNineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockNineRegular: React.FC<LanClockNineRegularProps>;
export default LanClockNineRegular;
