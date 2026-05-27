import React from 'react';

export interface NeoBombSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBombSolid: React.FC<NeoBombSolidProps>;
export default NeoBombSolid;
