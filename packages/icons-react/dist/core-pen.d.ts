import React from 'react';

export interface CorePenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePen: React.FC<CorePenProps>;
export default CorePen;
