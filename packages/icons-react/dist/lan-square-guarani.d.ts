import React from 'react';

export interface LanSquareGuaraniProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareGuarani: React.FC<LanSquareGuaraniProps>;
export default LanSquareGuarani;
