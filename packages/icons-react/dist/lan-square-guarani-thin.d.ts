import React from 'react';

export interface LanSquareGuaraniThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareGuaraniThin: React.FC<LanSquareGuaraniThinProps>;
export default LanSquareGuaraniThin;
