import React from 'react';

export interface LanCandyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyRegular: React.FC<LanCandyRegularProps>;
export default LanCandyRegular;
