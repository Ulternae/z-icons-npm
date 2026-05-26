import React from 'react';

export interface LanPartyHornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPartyHornRegular: React.FC<LanPartyHornRegularProps>;
export default LanPartyHornRegular;
