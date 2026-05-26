import React from 'react';

export interface LanBlueberriesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlueberriesRegular: React.FC<LanBlueberriesRegularProps>;
export default LanBlueberriesRegular;
