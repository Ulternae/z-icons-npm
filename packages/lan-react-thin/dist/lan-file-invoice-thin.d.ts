import React from 'react';

export interface LanFileInvoiceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileInvoiceThin(props: LanFileInvoiceThinProps): React.ReactElement;
export default LanFileInvoiceThin;
