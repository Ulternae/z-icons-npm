import React from 'react';

export interface NeoGearSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGearSolid: React.FC<NeoGearSolidProps>;
export default NeoGearSolid;
