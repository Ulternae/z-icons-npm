import React from 'react';

export interface LanCustardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCustard: React.FC<LanCustardProps>;
export default LanCustard;
