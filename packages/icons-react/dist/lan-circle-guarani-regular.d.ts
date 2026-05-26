import React from 'react';

export interface LanCircleGuaraniRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleGuaraniRegular: React.FC<LanCircleGuaraniRegularProps>;
export default LanCircleGuaraniRegular;
