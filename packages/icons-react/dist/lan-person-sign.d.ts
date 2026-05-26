import React from 'react';

export interface LanPersonSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSign: React.FC<LanPersonSignProps>;
export default LanPersonSign;
