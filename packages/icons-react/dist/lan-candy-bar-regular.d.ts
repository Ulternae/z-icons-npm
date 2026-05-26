import React from 'react';

export interface LanCandyBarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyBarRegular: React.FC<LanCandyBarRegularProps>;
export default LanCandyBarRegular;
