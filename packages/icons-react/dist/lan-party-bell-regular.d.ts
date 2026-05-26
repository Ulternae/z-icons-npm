import React from 'react';

export interface LanPartyBellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPartyBellRegular: React.FC<LanPartyBellRegularProps>;
export default LanPartyBellRegular;
