import React from 'react';

export interface LanLessThanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLessThanRegular: React.FC<LanLessThanRegularProps>;
export default LanLessThanRegular;
