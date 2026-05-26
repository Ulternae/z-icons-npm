import React from 'react';

export interface LanCupcakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupcake: React.FC<LanCupcakeProps>;
export default LanCupcake;
