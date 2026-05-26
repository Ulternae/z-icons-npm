import React from 'react';

export interface LanSquareFrancProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFranc: React.FC<LanSquareFrancProps>;
export default LanSquareFranc;
