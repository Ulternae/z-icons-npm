import React from 'react';

export interface LanRightLeftLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRightLeftLarge: React.FC<LanRightLeftLargeProps>;
export default LanRightLeftLarge;
