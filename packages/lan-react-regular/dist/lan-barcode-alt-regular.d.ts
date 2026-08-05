import React from 'react';

export interface LanBarcodeAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeAltRegular(props: LanBarcodeAltRegularProps): React.ReactElement;
export default LanBarcodeAltRegular;
