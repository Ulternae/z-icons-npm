import React from 'react';

export interface LanReflectBothThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReflectBothThin: React.FC<LanReflectBothThinProps>;
export default LanReflectBothThin;
