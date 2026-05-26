import React from 'react';

export interface LanPartyBellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPartyBellThin: React.FC<LanPartyBellThinProps>;
export default LanPartyBellThin;
