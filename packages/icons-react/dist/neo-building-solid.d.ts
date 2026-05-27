import React from 'react';

export interface NeoBuildingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBuildingSolid: React.FC<NeoBuildingSolidProps>;
export default NeoBuildingSolid;
