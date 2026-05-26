import React from 'react';

export interface LanMoneyBillTransferProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillTransfer: React.FC<LanMoneyBillTransferProps>;
export default LanMoneyBillTransfer;
