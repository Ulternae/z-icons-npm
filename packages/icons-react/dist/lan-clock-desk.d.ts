import React from 'react';

export interface LanClockDeskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockDesk: React.FC<LanClockDeskProps>;
export default LanClockDesk;
