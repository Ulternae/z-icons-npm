import React from 'react';

export interface LanReflectHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReflectHorizontalThin: React.FC<LanReflectHorizontalThinProps>;
export default LanReflectHorizontalThin;
