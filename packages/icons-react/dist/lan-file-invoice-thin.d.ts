import React from 'react';

export interface LanFileInvoiceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileInvoiceThin: React.FC<LanFileInvoiceThinProps>;
export default LanFileInvoiceThin;
