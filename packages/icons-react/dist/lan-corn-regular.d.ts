import React from 'react';

export interface LanCornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCornRegular: React.FC<LanCornRegularProps>;
export default LanCornRegular;
