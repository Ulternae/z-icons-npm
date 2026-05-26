import React from 'react';

export interface LanAlignRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignRightThin: React.FC<LanAlignRightThinProps>;
export default LanAlignRightThin;
