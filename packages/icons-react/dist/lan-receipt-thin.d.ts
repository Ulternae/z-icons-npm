import React from 'react';

export interface LanReceiptThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanReceiptThin: React.FC<LanReceiptThinProps>;
export default LanReceiptThin;
