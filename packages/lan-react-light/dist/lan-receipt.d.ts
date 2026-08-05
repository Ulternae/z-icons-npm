import React from 'react';

export interface LanReceiptProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReceipt(props: LanReceiptProps): React.ReactElement;
export default LanReceipt;
