import React from 'react';

export interface LanSquareNairaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareNairaSolid: React.FC<LanSquareNairaSolidProps>;
export default LanSquareNairaSolid;
