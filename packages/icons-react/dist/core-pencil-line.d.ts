import React from 'react';

export interface CorePencilLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePencilLine: React.FC<CorePencilLineProps>;
export default CorePencilLine;
