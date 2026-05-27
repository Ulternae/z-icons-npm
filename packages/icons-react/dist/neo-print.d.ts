import React from 'react';

export interface NeoPrintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPrint: React.FC<NeoPrintProps>;
export default NeoPrint;
