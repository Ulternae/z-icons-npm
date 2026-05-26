import React from 'react';

export interface LanClockDeskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockDeskThin: React.FC<LanClockDeskThinProps>;
export default LanClockDeskThin;
