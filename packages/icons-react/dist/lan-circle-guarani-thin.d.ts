import React from 'react';

export interface LanCircleGuaraniThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleGuaraniThin: React.FC<LanCircleGuaraniThinProps>;
export default LanCircleGuaraniThin;
