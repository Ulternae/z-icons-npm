import React from 'react';

export interface CorePenToSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePenToSquareSolid: React.FC<CorePenToSquareSolidProps>;
export default CorePenToSquareSolid;
