import React from 'react';

export interface LanUserBountyHunterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserBountyHunter: React.FC<LanUserBountyHunterProps>;
export default LanUserBountyHunter;
