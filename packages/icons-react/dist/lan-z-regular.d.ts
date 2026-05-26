import React from 'react';

export interface LanZRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanZRegular: React.FC<LanZRegularProps>;
export default LanZRegular;
