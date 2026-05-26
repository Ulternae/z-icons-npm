import React from 'react';

export interface LanCarMirrorsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarMirrors: React.FC<LanCarMirrorsProps>;
export default LanCarMirrors;
