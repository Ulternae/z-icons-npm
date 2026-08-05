import React from 'react';

export interface LanFileInvoiceDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileInvoiceDollar(props: LanFileInvoiceDollarProps): React.ReactElement;
export default LanFileInvoiceDollar;
