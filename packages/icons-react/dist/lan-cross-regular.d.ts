import React from 'react';

export interface LanCrossRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrossRegular: React.FC<LanCrossRegularProps>;
export default LanCrossRegular;
