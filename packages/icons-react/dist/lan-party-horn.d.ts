import React from 'react';

export interface LanPartyHornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPartyHorn: React.FC<LanPartyHornProps>;
export default LanPartyHorn;
