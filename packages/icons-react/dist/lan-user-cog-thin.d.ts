import React from 'react';

export interface LanUserCogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCogThin: React.FC<LanUserCogThinProps>;
export default LanUserCogThin;
