import React from 'react';

export interface LanMarsStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsStrokeSolid: React.FC<LanMarsStrokeSolidProps>;
export default LanMarsStrokeSolid;
