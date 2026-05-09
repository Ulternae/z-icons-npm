import React from 'react';

export interface MinaPrinterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPrinter: React.FC<MinaPrinterProps>;
export default MinaPrinter;
