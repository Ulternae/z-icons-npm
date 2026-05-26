import React from 'react';

export interface LanBorderLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderLeftThin: React.FC<LanBorderLeftThinProps>;
export default LanBorderLeftThin;
