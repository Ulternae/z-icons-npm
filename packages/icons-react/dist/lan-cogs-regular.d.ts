import React from 'react';

export interface LanCogsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCogsRegular: React.FC<LanCogsRegularProps>;
export default LanCogsRegular;
