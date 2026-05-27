import React from 'react';

export interface CoreAngleLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAngleLeftSolid: React.FC<CoreAngleLeftSolidProps>;
export default CoreAngleLeftSolid;
