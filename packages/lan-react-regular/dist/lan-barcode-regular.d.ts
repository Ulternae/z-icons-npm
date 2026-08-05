import React from 'react';

export interface LanBarcodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeRegular(props: LanBarcodeRegularProps): React.ReactElement;
export default LanBarcodeRegular;
