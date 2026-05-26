import React from 'react';

export interface LanAlignJustifyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignJustifyThin: React.FC<LanAlignJustifyThinProps>;
export default LanAlignJustifyThin;
