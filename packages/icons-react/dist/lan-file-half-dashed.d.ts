import React from 'react';

export interface LanFileHalfDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileHalfDashed: React.FC<LanFileHalfDashedProps>;
export default LanFileHalfDashed;
