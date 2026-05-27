import React from 'react';

export interface CorePrintSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePrintSolid: React.FC<CorePrintSolidProps>;
export default CorePrintSolid;
