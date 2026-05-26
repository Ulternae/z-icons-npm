import React from 'react';

export interface LanBorderInnerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderInnerThin: React.FC<LanBorderInnerThinProps>;
export default LanBorderInnerThin;
