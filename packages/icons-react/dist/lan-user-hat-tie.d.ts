import React from 'react';

export interface LanUserHatTieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHatTie: React.FC<LanUserHatTieProps>;
export default LanUserHatTie;
