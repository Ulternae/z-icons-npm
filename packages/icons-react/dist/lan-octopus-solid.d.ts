import React from 'react';

export interface LanOctopusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctopusSolid: React.FC<LanOctopusSolidProps>;
export default LanOctopusSolid;
