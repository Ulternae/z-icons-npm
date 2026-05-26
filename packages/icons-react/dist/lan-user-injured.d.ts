import React from 'react';

export interface LanUserInjuredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserInjured: React.FC<LanUserInjuredProps>;
export default LanUserInjured;
