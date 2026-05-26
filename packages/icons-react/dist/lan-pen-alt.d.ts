import React from 'react';

export interface LanPenAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenAlt: React.FC<LanPenAltProps>;
export default LanPenAlt;
