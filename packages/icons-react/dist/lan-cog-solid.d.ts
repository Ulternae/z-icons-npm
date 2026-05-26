import React from 'react';

export interface LanCogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCogSolid: React.FC<LanCogSolidProps>;
export default LanCogSolid;
