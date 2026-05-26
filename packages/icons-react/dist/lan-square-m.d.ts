import React from 'react';

export interface LanSquareMProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareM: React.FC<LanSquareMProps>;
export default LanSquareM;
