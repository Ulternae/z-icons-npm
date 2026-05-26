import React from 'react';

export interface LanImageCircleXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageCircleXmarkRegular: React.FC<LanImageCircleXmarkRegularProps>;
export default LanImageCircleXmarkRegular;
