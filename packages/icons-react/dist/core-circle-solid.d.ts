import React from 'react';

export interface CoreCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleSolid: React.FC<CoreCircleSolidProps>;
export default CoreCircleSolid;
