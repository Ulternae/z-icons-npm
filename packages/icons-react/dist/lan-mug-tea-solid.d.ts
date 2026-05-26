import React from 'react';

export interface LanMugTeaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugTeaSolid: React.FC<LanMugTeaSolidProps>;
export default LanMugTeaSolid;
