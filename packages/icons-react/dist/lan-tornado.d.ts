import React from 'react';

export interface LanTornadoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTornado: React.FC<LanTornadoProps>;
export default LanTornado;
