import React from 'react';

export interface LanCupcakeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupcakeThin: React.FC<LanCupcakeThinProps>;
export default LanCupcakeThin;
