import React from 'react';

export interface LanAriesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAries: React.FC<LanAriesProps>;
export default LanAries;
