import React from 'react';

export interface LanPersonGolfingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonGolfingSolid: React.FC<LanPersonGolfingSolidProps>;
export default LanPersonGolfingSolid;
