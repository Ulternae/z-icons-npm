import React from 'react';

export interface LanFireBurnerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireBurnerThin: React.FC<LanFireBurnerThinProps>;
export default LanFireBurnerThin;
