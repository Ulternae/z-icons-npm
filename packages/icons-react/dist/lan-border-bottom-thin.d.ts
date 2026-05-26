import React from 'react';

export interface LanBorderBottomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderBottomThin: React.FC<LanBorderBottomThinProps>;
export default LanBorderBottomThin;
