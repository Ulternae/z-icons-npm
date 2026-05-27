import React from 'react';

export interface NeoBellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBellSolid: React.FC<NeoBellSolidProps>;
export default NeoBellSolid;
