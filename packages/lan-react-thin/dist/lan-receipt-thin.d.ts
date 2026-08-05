import React from 'react';

export interface LanReceiptThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReceiptThin(props: LanReceiptThinProps): React.ReactElement;
export default LanReceiptThin;
