import React from 'react';

export interface CoreArrowsRotateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreArrowsRotateSolid: React.FC<CoreArrowsRotateSolidProps>;
export default CoreArrowsRotateSolid;
