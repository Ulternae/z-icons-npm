import React from 'react';

export interface LanPantsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPants: React.FC<LanPantsProps>;
export default LanPants;
