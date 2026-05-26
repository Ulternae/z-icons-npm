import React from 'react';

export interface LanCircleExclamationCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleExclamationCheck: React.FC<LanCircleExclamationCheckProps>;
export default LanCircleExclamationCheck;
