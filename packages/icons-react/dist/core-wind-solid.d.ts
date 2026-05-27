import React from 'react';

export interface CoreWindSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWindSolid: React.FC<CoreWindSolidProps>;
export default CoreWindSolid;
