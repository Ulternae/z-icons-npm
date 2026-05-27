import React from 'react';

export interface CoreCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleCheckSolid: React.FC<CoreCircleCheckSolidProps>;
export default CoreCircleCheckSolid;
