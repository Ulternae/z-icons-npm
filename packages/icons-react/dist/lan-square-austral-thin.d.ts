import React from 'react';

export interface LanSquareAustralThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareAustralThin: React.FC<LanSquareAustralThinProps>;
export default LanSquareAustralThin;
