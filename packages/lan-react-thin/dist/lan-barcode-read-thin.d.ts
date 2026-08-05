import React from 'react';

export interface LanBarcodeReadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeReadThin(props: LanBarcodeReadThinProps): React.ReactElement;
export default LanBarcodeReadThin;
