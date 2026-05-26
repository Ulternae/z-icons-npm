import React from 'react';

export interface LanPartyHornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPartyHornThin: React.FC<LanPartyHornThinProps>;
export default LanPartyHornThin;
