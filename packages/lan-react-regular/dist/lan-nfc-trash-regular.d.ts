import React from 'react';

export interface LanNfcTrashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcTrashRegular(props: LanNfcTrashRegularProps): React.ReactElement;
export default LanNfcTrashRegular;
