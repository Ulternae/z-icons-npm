import React from 'react';

export interface LanSackDollarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSackDollarRegular: React.FC<LanSackDollarRegularProps>;
export default LanSackDollarRegular;
