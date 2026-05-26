import React from 'react';

export interface LanCarBumpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBumpRegular: React.FC<LanCarBumpRegularProps>;
export default LanCarBumpRegular;
