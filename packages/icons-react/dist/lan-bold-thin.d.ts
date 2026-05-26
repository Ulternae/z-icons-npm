import React from 'react';

export interface LanBoldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoldThin: React.FC<LanBoldThinProps>;
export default LanBoldThin;
