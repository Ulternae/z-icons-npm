import React from 'react';

export interface LanBarcodeReadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeReadRegular(props: LanBarcodeReadRegularProps): React.ReactElement;
export default LanBarcodeReadRegular;
