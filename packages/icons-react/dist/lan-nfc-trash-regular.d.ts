import React from 'react';

export interface LanNfcTrashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcTrashRegular: React.FC<LanNfcTrashRegularProps>;
export default LanNfcTrashRegular;
