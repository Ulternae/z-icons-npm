import React from 'react';

export interface LanBorderOuterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderOuterThin: React.FC<LanBorderOuterThinProps>;
export default LanBorderOuterThin;
