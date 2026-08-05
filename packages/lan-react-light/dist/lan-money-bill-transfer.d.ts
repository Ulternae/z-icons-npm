import React from 'react';

export interface LanMoneyBillTransferProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillTransfer(props: LanMoneyBillTransferProps): React.ReactElement;
export default LanMoneyBillTransfer;
