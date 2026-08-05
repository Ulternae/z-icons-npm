import React from 'react';

export interface LanBarcodeReadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeRead(props: LanBarcodeReadProps): React.ReactElement;
export default LanBarcodeRead;
