import React from 'react';

export interface CoreAngleRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAngleRightSolid: React.FC<CoreAngleRightSolidProps>;
export default CoreAngleRightSolid;
