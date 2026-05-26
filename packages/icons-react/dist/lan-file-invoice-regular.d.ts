import React from 'react';

export interface LanFileInvoiceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileInvoiceRegular: React.FC<LanFileInvoiceRegularProps>;
export default LanFileInvoiceRegular;
