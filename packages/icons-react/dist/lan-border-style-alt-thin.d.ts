import React from 'react';

export interface LanBorderStyleAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderStyleAltThin: React.FC<LanBorderStyleAltThinProps>;
export default LanBorderStyleAltThin;
