import React from 'react';

export interface CoreBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBoltSolid: React.FC<CoreBoltSolidProps>;
export default CoreBoltSolid;
