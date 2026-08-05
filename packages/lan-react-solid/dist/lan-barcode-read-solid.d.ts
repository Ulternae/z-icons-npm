import React from 'react';

export interface LanBarcodeReadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeReadSolid(props: LanBarcodeReadSolidProps): React.ReactElement;
export default LanBarcodeReadSolid;
