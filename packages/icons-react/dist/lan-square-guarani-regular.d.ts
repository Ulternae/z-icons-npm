import React from 'react';

export interface LanSquareGuaraniRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareGuaraniRegular: React.FC<LanSquareGuaraniRegularProps>;
export default LanSquareGuaraniRegular;
