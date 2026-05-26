import React from 'react';

export interface LanFireBurnerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireBurnerRegular: React.FC<LanFireBurnerRegularProps>;
export default LanFireBurnerRegular;
