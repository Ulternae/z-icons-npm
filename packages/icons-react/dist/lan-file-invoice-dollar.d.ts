import React from 'react';

export interface LanFileInvoiceDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileInvoiceDollar: React.FC<LanFileInvoiceDollarProps>;
export default LanFileInvoiceDollar;
