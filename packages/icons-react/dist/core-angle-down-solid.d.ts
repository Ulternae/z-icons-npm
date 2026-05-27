import React from 'react';

export interface CoreAngleDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAngleDownSolid: React.FC<CoreAngleDownSolidProps>;
export default CoreAngleDownSolid;
