import React from 'react';

export interface LanPartyBellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPartyBellSolid: React.FC<LanPartyBellSolidProps>;
export default LanPartyBellSolid;
