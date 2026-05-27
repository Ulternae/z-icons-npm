import React from 'react';

export interface CorePencilProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePencil: React.FC<CorePencilProps>;
export default CorePencil;
