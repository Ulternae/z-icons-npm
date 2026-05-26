import React from 'react';

export interface LanEyeDropperHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeDropperHalf: React.FC<LanEyeDropperHalfProps>;
export default LanEyeDropperHalf;
