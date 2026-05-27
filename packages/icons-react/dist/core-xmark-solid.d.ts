import React from 'react';

export interface CoreXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreXmarkSolid: React.FC<CoreXmarkSolidProps>;
export default CoreXmarkSolid;
