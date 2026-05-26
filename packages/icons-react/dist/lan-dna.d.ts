import React from 'react';

export interface LanDnaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDna: React.FC<LanDnaProps>;
export default LanDna;
