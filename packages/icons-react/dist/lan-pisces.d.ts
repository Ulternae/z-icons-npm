import React from 'react';

export interface LanPiscesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPisces: React.FC<LanPiscesProps>;
export default LanPisces;
