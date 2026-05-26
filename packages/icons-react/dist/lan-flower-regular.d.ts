import React from 'react';

export interface LanFlowerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlowerRegular: React.FC<LanFlowerRegularProps>;
export default LanFlowerRegular;
