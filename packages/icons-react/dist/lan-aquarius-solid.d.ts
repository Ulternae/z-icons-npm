import React from 'react';

export interface LanAquariusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAquariusSolid: React.FC<LanAquariusSolidProps>;
export default LanAquariusSolid;
