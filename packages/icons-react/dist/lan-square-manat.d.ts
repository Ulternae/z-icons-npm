import React from 'react';

export interface LanSquareManatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareManat: React.FC<LanSquareManatProps>;
export default LanSquareManat;
