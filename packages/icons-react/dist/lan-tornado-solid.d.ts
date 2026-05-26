import React from 'react';

export interface LanTornadoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTornadoSolid: React.FC<LanTornadoSolidProps>;
export default LanTornadoSolid;
