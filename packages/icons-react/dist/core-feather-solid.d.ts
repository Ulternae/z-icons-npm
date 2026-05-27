import React from 'react';

export interface CoreFeatherSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFeatherSolid: React.FC<CoreFeatherSolidProps>;
export default CoreFeatherSolid;
