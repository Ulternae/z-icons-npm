import React from 'react';

export interface LanCheckDoubleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckDoubleSolid: React.FC<LanCheckDoubleSolidProps>;
export default LanCheckDoubleSolid;
