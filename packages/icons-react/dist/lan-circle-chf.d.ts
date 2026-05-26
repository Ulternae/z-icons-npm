import React from 'react';

export interface LanCircleChfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleChf: React.FC<LanCircleChfProps>;
export default LanCircleChf;
