import React from 'react';

export interface LanCustardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCustardRegular: React.FC<LanCustardRegularProps>;
export default LanCustardRegular;
