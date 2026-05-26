import React from 'react';

export interface LanReflectVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReflectVerticalThin: React.FC<LanReflectVerticalThinProps>;
export default LanReflectVerticalThin;
