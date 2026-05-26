import React from 'react';

export interface LanLeafMapleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafMapleRegular: React.FC<LanLeafMapleRegularProps>;
export default LanLeafMapleRegular;
