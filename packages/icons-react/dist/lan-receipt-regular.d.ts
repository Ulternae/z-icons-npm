import React from 'react';

export interface LanReceiptRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReceiptRegular: React.FC<LanReceiptRegularProps>;
export default LanReceiptRegular;
