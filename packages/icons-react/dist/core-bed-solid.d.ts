import React from 'react';

export interface CoreBedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBedSolid: React.FC<CoreBedSolidProps>;
export default CoreBedSolid;
