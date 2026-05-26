import React from 'react';

export interface LanBoxOpenFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxOpenFull: React.FC<LanBoxOpenFullProps>;
export default LanBoxOpenFull;
