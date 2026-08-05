import React from 'react';

export interface LanBarcodeAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeAltSolid(props: LanBarcodeAltSolidProps): React.ReactElement;
export default LanBarcodeAltSolid;
