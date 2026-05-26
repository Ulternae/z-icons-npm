import React from 'react';

export interface LanSushiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSushiRegular: React.FC<LanSushiRegularProps>;
export default LanSushiRegular;
