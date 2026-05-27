import React from 'react';

export interface CoreUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUserSolid: React.FC<CoreUserSolidProps>;
export default CoreUserSolid;
