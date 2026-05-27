import React from 'react';

export interface CorePlaneUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlaneUpSolid: React.FC<CorePlaneUpSolidProps>;
export default CorePlaneUpSolid;
