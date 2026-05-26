import React from 'react';

export interface LanSquareNfiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareNfiThin: React.FC<LanSquareNfiThinProps>;
export default LanSquareNfiThin;
