import React from 'react';

export interface LanSquareSwedishKronaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSwedishKronaThin: React.FC<LanSquareSwedishKronaThinProps>;
export default LanSquareSwedishKronaThin;
