import React from 'react';

export interface LanCircleGuaraniSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleGuaraniSolid: React.FC<LanCircleGuaraniSolidProps>;
export default LanCircleGuaraniSolid;
