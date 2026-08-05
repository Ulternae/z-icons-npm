import React from 'react';

export interface LanReceiptRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReceiptRegular(props: LanReceiptRegularProps): React.ReactElement;
export default LanReceiptRegular;
