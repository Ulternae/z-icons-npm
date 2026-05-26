import React from 'react';

export interface LanUserCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCheck: React.FC<LanUserCheckProps>;
export default LanUserCheck;
