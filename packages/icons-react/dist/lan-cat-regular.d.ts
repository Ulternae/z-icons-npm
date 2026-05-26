import React from 'react';

export interface LanCatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCatRegular: React.FC<LanCatRegularProps>;
export default LanCatRegular;
