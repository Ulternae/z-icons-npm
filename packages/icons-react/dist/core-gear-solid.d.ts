import React from 'react';

export interface CoreGearSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGearSolid: React.FC<CoreGearSolidProps>;
export default CoreGearSolid;
