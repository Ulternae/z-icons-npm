import React from 'react';

export interface LanNasProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNas: React.FC<LanNasProps>;
export default LanNas;
