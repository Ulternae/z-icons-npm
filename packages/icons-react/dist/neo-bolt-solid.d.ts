import React from 'react';

export interface NeoBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBoltSolid: React.FC<NeoBoltSolidProps>;
export default NeoBoltSolid;
