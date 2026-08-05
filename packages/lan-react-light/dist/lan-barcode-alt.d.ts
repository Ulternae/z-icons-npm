import React from 'react';

export interface LanBarcodeAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeAlt(props: LanBarcodeAltProps): React.ReactElement;
export default LanBarcodeAlt;
