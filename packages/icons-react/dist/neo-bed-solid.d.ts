import React from 'react';

export interface NeoBedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBedSolid: React.FC<NeoBedSolidProps>;
export default NeoBedSolid;
