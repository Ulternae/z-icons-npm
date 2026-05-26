import React from 'react';

export interface LanMeatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeatRegular: React.FC<LanMeatRegularProps>;
export default LanMeatRegular;
