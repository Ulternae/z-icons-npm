import React from 'react';

export interface CorePenLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePenLineSolid: React.FC<CorePenLineSolidProps>;
export default CorePenLineSolid;
