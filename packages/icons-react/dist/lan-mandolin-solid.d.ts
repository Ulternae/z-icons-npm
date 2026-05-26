import React from 'react';

export interface LanMandolinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMandolinSolid: React.FC<LanMandolinSolidProps>;
export default LanMandolinSolid;
