import React from 'react';

export interface CoreCircleInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleInfoSolid: React.FC<CoreCircleInfoSolidProps>;
export default CoreCircleInfoSolid;
