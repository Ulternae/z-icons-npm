import React from 'react';

export interface LanCartPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartPlusRegular: React.FC<LanCartPlusRegularProps>;
export default LanCartPlusRegular;
