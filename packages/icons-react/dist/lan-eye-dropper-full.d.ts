import React from 'react';

export interface LanEyeDropperFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeDropperFull: React.FC<LanEyeDropperFullProps>;
export default LanEyeDropperFull;
