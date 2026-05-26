import React from 'react';

export interface LanPProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanP: React.FC<LanPProps>;
export default LanP;
