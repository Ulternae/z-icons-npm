import React from 'react';

export interface LanCauldronProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCauldron: React.FC<LanCauldronProps>;
export default LanCauldron;
