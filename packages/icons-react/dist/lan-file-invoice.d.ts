import React from 'react';

export interface LanFileInvoiceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileInvoice: React.FC<LanFileInvoiceProps>;
export default LanFileInvoice;
