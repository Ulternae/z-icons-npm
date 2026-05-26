import React from 'react';

export interface LanRightLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRightLeft: React.FC<LanRightLeftProps>;
export default LanRightLeft;
