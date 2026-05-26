import React from 'react';

export interface LanSquareHryvniaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHryvniaSolid: React.FC<LanSquareHryvniaSolidProps>;
export default LanSquareHryvniaSolid;
