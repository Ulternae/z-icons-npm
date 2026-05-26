import React from 'react';

export interface LanPenRulerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenRuler: React.FC<LanPenRulerProps>;
export default LanPenRuler;
