import React from 'react';

export interface LanBorderTopLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderTopLeftThin: React.FC<LanBorderTopLeftThinProps>;
export default LanBorderTopLeftThin;
