import React from 'react';

export interface LanExpandArrowsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExpandArrowsRegular: React.FC<LanExpandArrowsRegularProps>;
export default LanExpandArrowsRegular;
