import React from 'react';

export interface CorePencilLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePencilLineSolid: React.FC<CorePencilLineSolidProps>;
export default CorePencilLineSolid;
