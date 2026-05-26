import React from 'react';

export interface LanLeafOakRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafOakRegular: React.FC<LanLeafOakRegularProps>;
export default LanLeafOakRegular;
