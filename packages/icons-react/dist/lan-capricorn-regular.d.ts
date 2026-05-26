import React from 'react';

export interface LanCapricornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCapricornRegular: React.FC<LanCapricornRegularProps>;
export default LanCapricornRegular;
