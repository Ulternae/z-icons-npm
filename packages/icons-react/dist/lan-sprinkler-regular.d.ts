import React from 'react';

export interface LanSprinklerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprinklerRegular: React.FC<LanSprinklerRegularProps>;
export default LanSprinklerRegular;
