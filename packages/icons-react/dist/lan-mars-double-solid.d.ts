import React from 'react';

export interface LanMarsDoubleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsDoubleSolid: React.FC<LanMarsDoubleSolidProps>;
export default LanMarsDoubleSolid;
