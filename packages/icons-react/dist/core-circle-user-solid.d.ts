import React from 'react';

export interface CoreCircleUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleUserSolid: React.FC<CoreCircleUserSolidProps>;
export default CoreCircleUserSolid;
