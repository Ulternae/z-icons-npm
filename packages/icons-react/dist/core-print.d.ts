import React from 'react';

export interface CorePrintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePrint: React.FC<CorePrintProps>;
export default CorePrint;
