import React from 'react';

export interface CoreBellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBellSolid: React.FC<CoreBellSolidProps>;
export default CoreBellSolid;
