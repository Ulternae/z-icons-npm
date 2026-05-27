import React from 'react';

export interface CoreBookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBookSolid: React.FC<CoreBookSolidProps>;
export default CoreBookSolid;
