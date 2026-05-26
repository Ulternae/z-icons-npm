import React from 'react';

export interface LanPartyHornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPartyHornSolid: React.FC<LanPartyHornSolidProps>;
export default LanPartyHornSolid;
