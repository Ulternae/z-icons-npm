import React from 'react';

export interface LanFileInvoiceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileInvoice(props: LanFileInvoiceProps): React.ReactElement;
export default LanFileInvoice;
