import React from 'react';

export interface LanBarcodeScanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeScanSolid(props: LanBarcodeScanSolidProps): React.ReactElement;
export default LanBarcodeScanSolid;
