import React from 'react';

export interface LanSquareQuoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareQuoteSolid: React.FC<LanSquareQuoteSolidProps>;
export default LanSquareQuoteSolid;
