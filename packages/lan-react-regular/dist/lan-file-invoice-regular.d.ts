import React from 'react';

export interface LanFileInvoiceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileInvoiceRegular(props: LanFileInvoiceRegularProps): React.ReactElement;
export default LanFileInvoiceRegular;
