import React from 'react';

export interface LanSquareUSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareUSolid: React.FC<LanSquareUSolidProps>;
export default LanSquareUSolid;
