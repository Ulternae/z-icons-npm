import React from 'react';

export interface LanLemonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLemonRegular: React.FC<LanLemonRegularProps>;
export default LanLemonRegular;
