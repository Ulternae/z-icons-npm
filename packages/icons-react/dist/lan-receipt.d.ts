import React from 'react';

export interface LanReceiptProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReceipt: React.FC<LanReceiptProps>;
export default LanReceipt;
