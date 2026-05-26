import React from 'react';

export interface LanFileHalfDashedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileHalfDashedThin: React.FC<LanFileHalfDashedThinProps>;
export default LanFileHalfDashedThin;
