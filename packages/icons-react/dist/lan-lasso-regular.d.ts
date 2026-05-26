import React from 'react';

export interface LanLassoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLassoRegular: React.FC<LanLassoRegularProps>;
export default LanLassoRegular;
