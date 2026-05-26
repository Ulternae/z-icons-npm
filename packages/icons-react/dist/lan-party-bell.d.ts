import React from 'react';

export interface LanPartyBellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPartyBell: React.FC<LanPartyBellProps>;
export default LanPartyBell;
