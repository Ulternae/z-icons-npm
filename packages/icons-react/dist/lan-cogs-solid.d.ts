import React from 'react';

export interface LanCogsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCogsSolid: React.FC<LanCogsSolidProps>;
export default LanCogsSolid;
