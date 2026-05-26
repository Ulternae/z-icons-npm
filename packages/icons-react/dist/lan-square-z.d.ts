import React from 'react';

export interface LanSquareZProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareZ: React.FC<LanSquareZProps>;
export default LanSquareZ;
