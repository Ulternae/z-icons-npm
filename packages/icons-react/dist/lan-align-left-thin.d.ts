import React from 'react';

export interface LanAlignLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignLeftThin: React.FC<LanAlignLeftThinProps>;
export default LanAlignLeftThin;
