import React from 'react';

export interface LanBarcodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcode(props: LanBarcodeProps): React.ReactElement;
export default LanBarcode;
