import React from 'react';

export interface LanBorderAllThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderAllThin: React.FC<LanBorderAllThinProps>;
export default LanBorderAllThin;
