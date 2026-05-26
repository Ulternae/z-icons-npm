import React from 'react';

export interface LanBinocularsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinocularsSolid: React.FC<LanBinocularsSolidProps>;
export default LanBinocularsSolid;
