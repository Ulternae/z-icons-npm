import React from 'react';

export interface LanCupStrawRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupStrawRegular: React.FC<LanCupStrawRegularProps>;
export default LanCupStrawRegular;
