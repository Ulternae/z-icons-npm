import React from 'react';

export interface NeoBugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBugSolid: React.FC<NeoBugSolidProps>;
export default NeoBugSolid;
