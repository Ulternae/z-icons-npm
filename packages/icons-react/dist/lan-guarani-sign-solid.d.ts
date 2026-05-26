import React from 'react';

export interface LanGuaraniSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuaraniSignSolid: React.FC<LanGuaraniSignSolidProps>;
export default LanGuaraniSignSolid;
