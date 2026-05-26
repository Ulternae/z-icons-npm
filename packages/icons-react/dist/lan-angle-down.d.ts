import React from 'react';

export interface LanAngleDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleDown: React.FC<LanAngleDownProps>;
export default LanAngleDown;
