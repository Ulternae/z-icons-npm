import React from 'react';

export interface LanBorderRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderRightThin: React.FC<LanBorderRightThinProps>;
export default LanBorderRightThin;
