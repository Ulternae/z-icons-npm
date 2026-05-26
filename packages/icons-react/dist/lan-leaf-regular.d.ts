import React from 'react';

export interface LanLeafRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafRegular: React.FC<LanLeafRegularProps>;
export default LanLeafRegular;
