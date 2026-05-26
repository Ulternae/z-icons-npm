import React from 'react';

export interface LanTransporter2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporter2Regular: React.FC<LanTransporter2RegularProps>;
export default LanTransporter2Regular;
