import React from 'react';

export interface CoreCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCarSolid: React.FC<CoreCarSolidProps>;
export default CoreCarSolid;
