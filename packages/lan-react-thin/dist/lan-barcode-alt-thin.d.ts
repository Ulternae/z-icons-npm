import React from 'react';

export interface LanBarcodeAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeAltThin(props: LanBarcodeAltThinProps): React.ReactElement;
export default LanBarcodeAltThin;
