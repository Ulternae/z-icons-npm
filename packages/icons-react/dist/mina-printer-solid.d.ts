import React from 'react';

export interface MinaPrinterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPrinterSolid: React.FC<MinaPrinterSolidProps>;
export default MinaPrinterSolid;
