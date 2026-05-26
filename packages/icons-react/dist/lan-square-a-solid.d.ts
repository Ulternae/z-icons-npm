import React from 'react';

export interface LanSquareASolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareASolid: React.FC<LanSquareASolidProps>;
export default LanSquareASolid;
