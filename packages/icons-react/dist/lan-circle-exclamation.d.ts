import React from 'react';

export interface LanCircleExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleExclamation: React.FC<LanCircleExclamationProps>;
export default LanCircleExclamation;
