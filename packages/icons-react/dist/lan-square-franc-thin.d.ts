import React from 'react';

export interface LanSquareFrancThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFrancThin: React.FC<LanSquareFrancThinProps>;
export default LanSquareFrancThin;
