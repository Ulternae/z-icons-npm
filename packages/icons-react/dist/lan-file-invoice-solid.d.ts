import React from 'react';

export interface LanFileInvoiceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileInvoiceSolid: React.FC<LanFileInvoiceSolidProps>;
export default LanFileInvoiceSolid;
