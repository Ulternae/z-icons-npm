import React from 'react';

export interface LanCirclePesoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePesoSolid: React.FC<LanCirclePesoSolidProps>;
export default LanCirclePesoSolid;
