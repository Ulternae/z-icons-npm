import React from 'react';

export interface LanSquareGuaraniSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareGuaraniSolid: React.FC<LanSquareGuaraniSolidProps>;
export default LanSquareGuaraniSolid;
