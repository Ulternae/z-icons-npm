import React from 'react';

export interface LanDialMaxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMax: React.FC<LanDialMaxProps>;
export default LanDialMax;
