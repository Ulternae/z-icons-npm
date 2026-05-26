import React from 'react';

export interface LanCandyCornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyCornRegular: React.FC<LanCandyCornRegularProps>;
export default LanCandyCornRegular;
