import React from 'react';

export interface LanVanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVanRegular: React.FC<LanVanRegularProps>;
export default LanVanRegular;
