import React from 'react';

export interface LanHomeLgRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeLgRegular: React.FC<LanHomeLgRegularProps>;
export default LanHomeLgRegular;
