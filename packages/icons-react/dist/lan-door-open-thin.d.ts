import React from 'react';

export interface LanDoorOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoorOpenThin: React.FC<LanDoorOpenThinProps>;
export default LanDoorOpenThin;
