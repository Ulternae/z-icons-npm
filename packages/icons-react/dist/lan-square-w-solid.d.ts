import React from 'react';

export interface LanSquareWSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareWSolid: React.FC<LanSquareWSolidProps>;
export default LanSquareWSolid;
