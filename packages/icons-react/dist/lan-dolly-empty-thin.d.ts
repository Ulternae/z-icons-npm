import React from 'react';

export interface LanDollyEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDollyEmptyThin: React.FC<LanDollyEmptyThinProps>;
export default LanDollyEmptyThin;
