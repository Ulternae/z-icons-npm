import React from 'react';

export interface CoreTextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTextSolid: React.FC<CoreTextSolidProps>;
export default CoreTextSolid;
