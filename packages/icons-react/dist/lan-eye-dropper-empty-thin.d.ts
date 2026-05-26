import React from 'react';

export interface LanEyeDropperEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeDropperEmptyThin: React.FC<LanEyeDropperEmptyThinProps>;
export default LanEyeDropperEmptyThin;
