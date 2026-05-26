import React from 'react';

export interface LanMugTeaSaucerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugTeaSaucerSolid: React.FC<LanMugTeaSaucerSolidProps>;
export default LanMugTeaSaucerSolid;
