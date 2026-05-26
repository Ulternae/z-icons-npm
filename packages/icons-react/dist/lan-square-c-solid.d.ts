import React from 'react';

export interface LanSquareCSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCSolid: React.FC<LanSquareCSolidProps>;
export default LanSquareCSolid;
