import React from 'react';

export interface LanRingsWeddingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRingsWeddingThin: React.FC<LanRingsWeddingThinProps>;
export default LanRingsWeddingThin;
