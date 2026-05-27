import React from 'react';

export interface CoreBuildingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBuildingSolid: React.FC<CoreBuildingSolidProps>;
export default CoreBuildingSolid;
