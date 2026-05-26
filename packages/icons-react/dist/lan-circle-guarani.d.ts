import React from 'react';

export interface LanCircleGuaraniProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleGuarani: React.FC<LanCircleGuaraniProps>;
export default LanCircleGuarani;
