import React from 'react';

export interface LanPawAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPawAlt: React.FC<LanPawAltProps>;
export default LanPawAlt;
