import React from 'react';

export interface LanBackpackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackpackRegular: React.FC<LanBackpackRegularProps>;
export default LanBackpackRegular;
