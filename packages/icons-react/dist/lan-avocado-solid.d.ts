import React from 'react';

export interface LanAvocadoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAvocadoSolid: React.FC<LanAvocadoSolidProps>;
export default LanAvocadoSolid;
