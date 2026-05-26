import React from 'react';

export interface LanEyeDropperFullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeDropperFullThin: React.FC<LanEyeDropperFullThinProps>;
export default LanEyeDropperFullThin;
