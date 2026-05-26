import React from 'react';

export interface LanSquarePesoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePeso: React.FC<LanSquarePesoProps>;
export default LanSquarePeso;
