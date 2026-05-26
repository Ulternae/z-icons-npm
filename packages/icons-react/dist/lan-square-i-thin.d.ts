import React from 'react';

export interface LanSquareIThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareIThin: React.FC<LanSquareIThinProps>;
export default LanSquareIThin;
