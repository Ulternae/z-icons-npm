import React from 'react';

export interface LanGavelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGavelRegular: React.FC<LanGavelRegularProps>;
export default LanGavelRegular;
