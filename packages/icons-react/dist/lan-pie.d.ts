import React from 'react';

export interface LanPieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPie: React.FC<LanPieProps>;
export default LanPie;
