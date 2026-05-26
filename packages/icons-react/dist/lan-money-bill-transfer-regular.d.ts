import React from 'react';

export interface LanMoneyBillTransferRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillTransferRegular: React.FC<LanMoneyBillTransferRegularProps>;
export default LanMoneyBillTransferRegular;
