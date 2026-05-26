import React from 'react';

export interface LanSquarePesetaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePesetaSolid: React.FC<LanSquarePesetaSolidProps>;
export default LanSquarePesetaSolid;
